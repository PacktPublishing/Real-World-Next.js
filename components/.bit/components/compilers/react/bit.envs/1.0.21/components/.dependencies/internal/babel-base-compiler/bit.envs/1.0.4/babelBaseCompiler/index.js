import {
    transform
} from '@babel/core';
import Vinyl from 'vinyl';
import path from 'path';
import groupBy from '@bit/bit.utils.object.group-by';
import getBabelOptions from '../getBabelOptions';

const _getDistFile = (file, distPath, content) => {
    let distFile = file.clone();
    distFile.base = distPath;
    distFile.path = path.join(distPath, file.relative);

    if (content) {
        distFile.contents = content;
    }

    return distFile;
}

const _runBabel = (file, options, distPath) => {
    options.configFile = false
    const {
        code,
        map
    } = transform(file.contents.toString(), options);

    const mappings = new Vinyl({
        contents: new Buffer(map.mappings),
        base: distPath,
        path: path.join(distPath, file.relative),
    });
    mappings.basename = file.basename + '.map';
    file.basename = path.parse(file.basename).name + '.js';

    const fileContent = code ?
        new Buffer(`${code}\n\n//# sourceMappingURL=${mappings.basename}`) :
        new Buffer(code);
    const distFile = _getDistFile(file, distPath, fileContent);

    return [mappings, distFile];
}

const baseCompile = (files, distPath, compilerPath, compiledFileTypes) => {
    // Get babel options from .babelrc file in actual compiler dir
    const options = getBabelOptions(compilerPath);

    // Divide files by whether we should compile them, according to file type.
    const filesByToCompile = groupBy(files, (file) => {
        return compiledFileTypes.indexOf(file.extname.replace('.', '')) > -1;
    });

    // Compile the ones we should
    const compiled = (!filesByToCompile.true || filesByToCompile.true.length === 0) ?
        [] :
        filesByToCompile.true.map(file =>
            _runBabel(file, options, distPath)).reduce((a, b) => a.concat(b));

    // We also need the non-compiled files as dist files
    const nonCompiled = !filesByToCompile.false ?
        [] :
        filesByToCompile.false.map(file => _getDistFile(file, distPath));

    // Compiler returns compiled AND non compiled dist files together
    return compiled.concat(nonCompiled);;
}

export default baseCompile;
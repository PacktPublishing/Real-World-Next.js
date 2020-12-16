import fs from 'fs-extra';
import path from 'path';

const getBabelRc = (pathToLook) => {
    const babelRcPath = `${pathToLook}${path.sep}.babelrc`;
    const file = fs.readFileSync(babelRcPath, 'utf8');
    return JSON.parse(file);
}

const moduleIsAvailable = (modulePath, compilerNodeModules) => {
    try {
        return require.resolve(modulePath, {paths: [compilerNodeModules]});
    } catch (e) {
        return null;
    }
}

const addBabelPrefixAndResolve = (prefixType, obj, compilerRootFolder) => {
    const compilerNodeModules = path.join(compilerRootFolder, 'node_modules');
    if(obj.startsWith('module:')) {
        obj = obj.substring(7);
    }
    const resolvedModule = moduleIsAvailable(obj, compilerNodeModules);
    if (resolvedModule) {
        return resolvedModule;
    }
    if (obj.startsWith('@babel/')) {
        if (!obj.startsWith(`@babel/${prefixType}`)) {
            obj = `@babel/${prefixType}-${obj}`;
        }
    } else if (!obj.startsWith(`babel-${prefixType}`)) {
        obj = `babel-${prefixType}-${obj}`;
    }
    return require.resolve(obj, {paths: [compilerNodeModules]});
}

/**
 * @name getBabelOptions
 * @description Retrieves the babel options from the `.babelrc` file as JSON  from the specified directory.
 * @param {string} pathToLook 
 * @example
 * const babelOptions = getBabelOptions();
 * babel.transform(code, babelOptions, distPath);
 */
const getBabelOptions = (pathToLook) => {
    const options = getBabelRc(pathToLook);
    options.sourceMaps = true;

    if(options.plugins) {
        options.plugins = options.plugins.map(plugin => {
            if (Array.isArray(plugin)) {
                plugin[0] = addBabelPrefixAndResolve('plugin', plugin[0], pathToLook);
                return plugin;
            }
    
            return addBabelPrefixAndResolve('plugin', plugin, pathToLook);
        });
    }

    if(options.presets) {
        options.presets = options.presets.map(preset => {
            if (Array.isArray(preset)) {
                preset[0] = addBabelPrefixAndResolve('preset', preset[0], pathToLook);
                return preset;
            }
    
            return addBabelPrefixAndResolve('preset', preset, pathToLook);
        });
    }

    return options;
}

export default getBabelOptions;
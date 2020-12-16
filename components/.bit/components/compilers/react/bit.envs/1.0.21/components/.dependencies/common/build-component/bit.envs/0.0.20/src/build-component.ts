import { createWorkspace } from './create-workspace';
// @ts-ignore
import Helper from 'bit-bin/dist/e2e-helper/e2e-helper';
import path from 'path';
import fs from 'fs-extra';
import { GenericObject } from './compiler-types';
import rimraf from 'rimraf';

export type BuildResult = {
  directory: string;
  files: string[];
  showComponent: GenericObject;
};

export type BuildOptions = {
  shouldPrintOutput?: boolean;
  shouldDebugEnvironment?: boolean;
  compilerPath?: string;
  disableBuildStep?: boolean;
  component?: GenericObject;
  envTester?: string;
};

//the first file need to be the main file of the component
export function getDefaultComponent(): GenericObject {
  return {
    'src/comp.tsx': `
    import React from 'react'
    export class HelloWorld {
        render() {
            return <div>Hello-World</div>
        }
    }`,
    'src/test.css': '',
    'src/types.d.ts': '',
    'src/try.svg': '',
  };
}

export function getBitAddCommand(files: Array<string>, compId: string): string {
  let bitAddCommand = 'bit add';
  let testsFiles = '';
  files.forEach((filePath) => {
    if (filePath.includes('.spec.')) {
      testsFiles += `${filePath},`;
    } else {
      bitAddCommand += ` ${filePath}`;
    }
  });
  testsFiles = testsFiles.substring(0, testsFiles.length - 1);
  bitAddCommand += ` --main ${files[0]} --id ${compId} --tests "${testsFiles}"`;
  return bitAddCommand;
}

export async function buildComponentInWorkspace(helper: Helper, opts?: BuildOptions): Promise<BuildResult> {
  const results: BuildResult = { directory: '', files: [], showComponent: {} };
  const component: GenericObject = (opts && opts.component) || getDefaultComponent();
  const files: Array<string> = Object.keys(component);
  let compId: string = getFileName(files[0]);
  compId = compId.substring(0, compId.indexOf('.'));
  results.directory = await createWorkspace(component, {
    env: (opts && opts.compilerPath) || 'dist/src/index.js',
    envTester: (opts && opts.envTester) || '',
    name: 'typescript',
    packageJSON: {
      dependencies: {
        '@types/react': '^16.9.11',
        react: '^16.11.0',
      },
    },
  } as any);

  helper.scopeHelper.initWorkspace(results.directory);
  helper.command.runCmd(getBitAddCommand(files, compId), results.directory);

  let output = '';
  if (!opts || opts.disableBuildStep !== true) {
    output = helper.env.command.runCmd(getCommandString(compId, opts), results.directory);
    results.files = await fs.readdir(path.join(results.directory, '/dist'));
  }

  if (opts && opts.shouldPrintOutput) {
    console.log('------------output------------');
    console.log(output);
    console.log('------------output------------');
  }

  results.showComponent = JSON.parse(helper.command.runCmd(`bit show ${compId} --json`, results.directory));
  return results;
}

export function getFileName(path: string): string {
  return path.replace(/^.*[\\\/]/, '');
}

function getCommandString(compId: string, opts?: BuildOptions) {
  return opts && opts.shouldDebugEnvironment
    ? `node --inspect-brk $(which bit) build ${compId}`
    : `bit build ${compId}`;
}

export async function removeWorkspace(directory: string) {
  return new Promise((resolve, reject) => rimraf(directory, {}, (error) => (error ? reject() : resolve())));
}

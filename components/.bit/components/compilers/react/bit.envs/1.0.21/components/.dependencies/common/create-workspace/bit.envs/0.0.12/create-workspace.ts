import { promises as fs } from 'fs';
import mkdirp, { Options } from 'mkdirp';
import path from 'path';
import { getCapsuleName } from './get-capsule-name';

export async function createWorkspace(content: WorkspaceContent, options: WorkspaceOptions): Promise<string> {
  const targetDir = getCapsuleName('space');
  enrichContentWithDefaults(content, options);
  await createFS(targetDir, content);
  return targetDir;
}
export interface WorkspaceOptions {
  env: string;
  envTester?: string;
  name: string;
  packageJSON?: { [k: string]: any };
}

export interface WorkspaceContent {
  [k: string]: string;
}

function mkdirPromise(dir: string, opts: Options) {
  return new Promise((resolve, reject) => {
    mkdirp(dir, opts, (err, made) => (err === null ? resolve(made) : reject(err)));
  });
}

async function createFS(targetDir: string, content: WorkspaceContent) {
  await mkdirPromise(targetDir, {});
  await Promise.all(
    Object.keys(content).map(async key => {
      const realPath = path.join(targetDir, key);
      const containingFolder = path.dirname(realPath);
      await mkdirPromise(containingFolder, {});
      const filePath = path.resolve(targetDir, key);
      await fs.writeFile(filePath, content[key]);
    })
  );
}

function enrichContentWithDefaults(content: WorkspaceContent, options: WorkspaceOptions) {
  const packageJSON = Object.assign(
    {
      name: options.name,
      description: `Testing ${options.name}`,
      version: '0.0.1',
      bit: {
        env: {
          compiler: {
            meta: {
              options: {
                file: path.resolve(options.env)
              }
            }
          },
          tester: {
            meta2: {
              options: {
                file: options.envTester ? path.resolve(options.envTester) : ''
              }
            }
          }
        },
        componentsDefaultDirectory: 'components/{name}',
        packageManager: 'npm'
      }
    },
    options.packageJSON || {}
  );

  content['package.json'] = content['package.json'] || JSON.stringify(packageJSON, null, 4);
  content['.gitignore'] = content['.gitignore'] || `dist\nnode_modules\n`;
}

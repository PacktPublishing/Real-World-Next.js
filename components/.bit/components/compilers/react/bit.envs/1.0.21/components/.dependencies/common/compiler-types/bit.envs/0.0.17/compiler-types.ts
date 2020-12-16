import Vinyl from 'vinyl';

export interface GenericObject {
  [key: string]: any;
}

export interface CompilationContext {
  directory: string;
  name: string;
  main: string;
  dist: string;
  capsule: GenericObject;
  res: GenericObject;
  cc: CompilerContext;
  srcTestFiles: Vinyl[];
}

export interface InitAPI {
  getLogger: () => Logger;
}

export interface Logger {
  log: Function;
  error: Function;
}

export interface InitOptions {
  write: boolean;
}

export interface CompilerContext {
  context: GenericObject;
  configFiles: Vinyl[];
  files: Vinyl[];
  rawConfig: GenericObject;
  dynamicConfig?: GenericObject;
  api?: any;
}
export interface ActionReturnType {
  dists: Vinyl[];
  mainFile?: string;
}

export interface Compiler<A = CompilerContext, B = ActionReturnType> {
  init: ({ api }: { api: InitAPI }) => InitOptions;
  action: (ctx: A) => Promise<B>;
  getDynamicPackageDependencies: (ctx: CompilerContext, name?: string) => GenericObject;
  getDynamicConfig?: (ctx: CompilerContext) => GenericObject;
  logger?: Logger;
}

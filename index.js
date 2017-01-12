declare module 'mime' {
  declare function lookup(path: string): string;

  declare function extension(type: string): string;

  declare function define(mappings: { [type:string]:Array<string> }): void;

  declare function load(path: string): void;

  declare var default_type: string;

  declare var charsets: {
    lookup(type: string):string;
  }
}

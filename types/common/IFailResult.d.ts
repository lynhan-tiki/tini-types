/// <reference no-default-lib="true"/> 

declare namespace my {
  interface IFailResult {
    readonly error?: number;
    readonly errorMessage?: string;
  }
}

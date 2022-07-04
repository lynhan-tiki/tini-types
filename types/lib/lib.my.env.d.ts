/*! *****************************************************************************
Copyright (c) 2022 TIKI COMPANY LIMITED. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************** */

// =========== `[Warning]`those global entities are not available in Tini App/ including *.sjs files.
// @ts-ignore
declare var globalThis: undefined
declare var global: undefined
declare var fetch: undefined
declare var self: undefined
declare var Window: undefined
declare var window: undefined
declare var document: undefined
declare var location: undefined
declare var XMLHttpRequest: undefined
// @ts-ignore
declare var eval: undefined
// @ts-ignore
declare var Function: undefined
// ===========

declare function require(module: string): any

declare let module: {
  exports: any
}
declare let exports: any

declare function clearInterval(intervalID: number): void
declare function clearTimeout(timeoutID: number): void
declare function setInterval(
  callback: (...args: any[]) => any,
  delay?: number,
  rest?: any
): number
declare function setTimeout(
  callback: (...args: any[]) => any,
  delay?: number,
  rest?: any
): number

declare namespace tinitypes {
    interface Console {
      memory: any
      assert(condition?: boolean, ...data: any[]): void
      clear(): void
      count(label?: string): void
      countReset(label?: string): void
      debug(...data: any[]): void
      dir(item?: any, options?: any): void
      dirxml(...data: any[]): void
      error(...data: any[]): void
      exception(message?: string, ...optionalParams: any[]): void
      group(...data: any[]): void
      groupCollapsed(...data: any[]): void
      groupEnd(): void
      info(...data: any[]): void
      log(...data: any[]): void
      table(tabularData?: any, properties?: string[]): void
      time(label?: string): void
      timeEnd(label?: string): void
      timeLog(label?: string, ...data: any[]): void
      timeStamp(label?: string): void
      trace(...data: any[]): void
      warn(...data: any[]): void
    }
  }
declare const console: tinitypes.Console

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

/// <reference path="./lib.my.api.d.ts" />
/// <reference path="./lib.my.app.d.ts" />
/// <reference path="./lib.my.page.d.ts" />
/// <reference path="./lib.my.component.d.ts" />

declare namespace tinitypes {
  type IAnyObject = Record<string, any>
  type Optional<F> = F extends (arg: infer P) => infer R ? (arg?: P) => R : F
  type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> }
  interface AsyncJSAPIOptionLike {
    success?: (...args: any[]) => void
  }
  type PromisifySuccessResult<P, T extends AsyncJSAPIOptionLike> = P extends {
    success: any
  }
    ? void
    : P extends { fail: any }
    ? void
    : P extends { complete: any }
    ? void
    : Promise<Parameters<Exclude<T['success'], undefined>>[0]>

}
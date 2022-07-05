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

declare namespace tinitypes.App {
    interface ReferrerInfo {
      appId: string
      sourceServiceId: string
      // @ts-ignore
      extraData: Record<string, any>
    }

    interface LaunchShowOption {
      path: string
      /**
       * Khi sử dụng my.navigateTo, my.redirectTo, params sẽ truyền vào trong query.
       * query là object parse từ URLSearchParams, xem thêm tại https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
       */
      query: Record<string, string>
      referrerInfo?: ReferrerInfo
    }


    /**
     * see more at https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event
     */
    interface OnUnhandledRejectionEvent {
      promise: Promise<any>
      reason: string
    }
    interface OnUnhandledRejectionCallback<R> {
      (this: R, event: OnUnhandledRejectionEvent): void
    }

    type AnyObject = Record<string, any>
    type Instance<T> = Omit<T, BannedKeys>

    type BannedKeys = 'onLaunch' |'onShow'
    |'onHide'
    |'onError'
    |'onUnhandledRejection'
    type TCustom<T> = Omit<T, BannedKeys>
    type Options<
      T
      > = (Partial<T & ThisType<Instance<T>>> &
        Partial<AppEventHandlers<Instance<T>>>) &
      ThisType<
        Instance<T>
      >
    interface Constructor {
      <T = AnyObject>(
        options: Options<T>
      ): void
    }




    interface AppEventHandlers<R = {}> {
    /**
     *
     * `onLaunch` sẽ được trigger khi lần đầu init app.
     *
     * AppCreate(`onLanch` => `onShow`) => PageCreate(`onLoad` => `onShow` => `onReady`)
     * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
     */
      onLaunch(this: R, options: LaunchShowOption): void | Promise<void>

      /**
       *
       * `onShow` sẽ được trigger sau khi hàm `onLaunch`
       *  và trước khi khởi tạo Page.
       *
       * AppCreate(`onLanch` => `onShow`) => PageCreate(`onLoad` => `onShow` => `onReady`)
       * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
       */
      onShow(this: R, options: LaunchShowOption): void | Promise<void>
      /**
      *
      * `onShow` sẽ được trigger khi app bị ẩn.
      *
      */
      onHide(this: R): void | Promise<void>
      /**
       *
       * @param error error detail/ error name
       */
      onError(this: R, error: string): void
      onUnhandledRejection: OnUnhandledRejectionCallback<R>
    }


    interface GetApp {
      <T = AnyObject>(): Omit<Instance<T>, keyof AppEventHandlers>
    }
  }




/**
 * `App()` là constructor function của app instance, cũng là root entry của app
 * This constructor does not require `new` operator
 */
declare const App: tinitypes.App.Constructor
/**
  * Hàm getApp trả về instance của application.
  * @example
  * Ví dụ ở Application, khai báo biến globalData
  * ```js
     App({
      globalData: 1
        doSomething() {
        // bla bla
        }
     })
  * ```
  * Ở page access biến globalData và gọi hàm doSomething
  * ```js
  * // page.js
  * var app = getApp();
  * console.log(app.globalData);
  * app.doSomething()
  * ```
  */
declare const getApp: tinitypes.App.GetApp


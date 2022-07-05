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
declare namespace tinitypes.Page {
  type AnyObject = Record<string, any>
  type OnShareAppMessageOptions = any
  interface IOnShareAppMessageResult {
    title: string
    desc?: string
    path: string
    content?: string
    success?(): void
    fail?(): void
  }
  type PageScrollEvent =
    | [
      {
        readonly scrollTop: number
        readonly scrollHeight: number
      },
      null,
      null
    ]
    | {
      readonly scrollTop: number
      readonly scrollHeight: number
    }



    interface LifeCycles {
      /**
       * Page lifecycle
       * onLoad được gọi sau khi Page được khởi tạo bởi App
       * Hoặc khởi tạo thông qua my.navigateTo, my.redirectTo,
       */
      onLoad?(
        /**
         * page load query string
         * @example "parameterName=parameterValue&meterName=parameterValue...".
         * @see https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
         */
        query?: string): void
      /**
       * được gọi sau khi page finish render lần đầu tiên
       * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
       */
      onReady?(): void
      /**
      * được gọi khi Page được show hoặc mở lại từ background
      * @see https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
      */
      onShow?(): void
      /**
      * được gọi sau Page bị hide hoặc enter background
      * @see https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
      */
      onHide?(): void
      /**
      * được gọi khi page bị destroy
      * @see https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
      */
      onUnload?(): void
      /**
       * onPullDownRefresh được gọi khi user pull to refresh hoặc gọi my.startPullDownRefresh.
       * Sử dụng callback này để refresh lại data.
       * @see https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
       */
      onPullDownRefresh?(): void
      onReachBottom?(): void

      onPageScroll?(event: PageScrollEvent): void

      onPageholderTap?: () => void
      /**
      * được gọi khi user thực hiện tác vụ "Chia sẻ" trong options menu.
      * @see https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
      */
      onShareAppMessage?: (options: OnShareAppMessageOptions) => IOnShareAppMessageResult

    }


  interface Instance<D> extends Record<string, any> {
    readonly data: D
    /**
     * Page's update state method
     * @see https://developers.tiki.vn/docs/framework/overview#reactive-data-binding
     */
    readonly setData: (data: Partial<D>&{[k:string]:any}, callback?: () => void) => void
    /**
     * an optimized method for update state
     * @example
     * ```js
       Page({
         data: {
           a: {
             b: [1,2,3,4],
           },
         },
         onLoad(){
           this.$spliceData({ 'a.b': [1, 0, 5, 6] });
         },
       });
     * ```
     * @see https://developers.tiki.vn/blog#gi%E1%BA%A3m-thi%E1%BB%83u-d%E1%BB%AF-li%E1%BB%87u-truy%E1%BB%81n-v%C3%A0o-setdata
     */
    readonly $spliceData: (
      data: {
        [k: string]: [number, number, ...any[]]
      },
      callback?: () => void
    ) => void
    /**
    * batching multiple `this.setData`
    * @example
    * ```js
      Page({
        data: {
          counter: 0,
        },
        onLoad() {
          setTimeout(() => {
            this.$batchedUpdates(() => {
              this.setData({
                counter: this.data.counter + 1,
              });
              this.setData({
                counter: this.data.counter + 1,
              });
            });
          }, 200);
        },
      });
    * ```
    * @see https://developers.tiki.vn/blog#gi%E1%BA%A3m-thi%E1%BB%83u-d%E1%BB%AF-li%E1%BB%87u-truy%E1%BB%81n-v%C3%A0o-setdata
    */
    $batchedUpdates: (callback: () => void) => void
  }

  type PageOptions<D = Record<string, any>, M = Record<string, any>> = LifeCycles & {
   readonly data?: D
    [name: string]: any
  } & M & ThisType<Instance<D> & M>

  interface GetCurrentPages {
    (): Array<PageOptions<{}, {}>>
  }
  interface Constructor {
    <Data, Methods>(option: PageOptions<Data, Methods>): void
  }

}
/**
 * `Page()` là constructor function cho các page mà user define
 *
 *  _Page constructor does not require `new` operator_
 */
declare const Page: tinitypes.Page.Constructor
/**
  * getCurrentPages() là global method được sử dụng để lấy stack của các page hiện tại.
  * Kết quả trả về là array các pages với phần tử đầu tiên là home, phần từ cuối cùng là page hiện tại.
  * @see https://developers.tiki.vn/docs/framework/miniapp-page/get-current-pages
  */
declare const getCurrentPages: tinitypes.Page.GetCurrentPages

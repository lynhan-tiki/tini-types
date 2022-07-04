




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
    type Instance<TData, TCustom> =
      InstanceMethods<TData> &
      Data<TData> &
      TCustom
    type Options<
      TData,
      TCustom
      > = (TCustom &
        Partial<Data<TData>> &
        Partial<LifeCycles<
          Instance<TData, TCustom>
        >>) &
      ThisType<
        Instance<TData, TCustom>
      >
    interface Constructor {
      <TData, TCustom extends AnyObject>(
        options: Options<TData, TCustom>
      ): void
    }
    interface InstanceMethods<D> {
      setData(
        data: Partial<D> & AnyObject,
        callback?: () => void
      ): void
    }
    interface Data<D> {
      data: D
    }


    interface GetCurrentPages {
      (): Array<Instance<AnyObject, AnyObject>>
    }


    type OnShareAppMessageOptions = any
      interface IOnShareAppMessageResult {
      title: string
      desc?: string
      path: string
      content?: string
      success?(): void
      fail?(): void
    }

    type IPageScrollEvent =
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

    interface LifeCycles<R = {}> {
      /**
       * Page lifecycle
       * onLoad được gọi sau khi Page được khởi tạo.
       * Khi sử dụng my.navigateTo, my.redirectTo,
       * @param query sẽ truyền vào trong query.
       * Format của query: "parameterName=parameterValue¶meterName=parameterValue...".
       * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
       */
      onLoad(
        this: R,
        query: Record<string, string | undefined>
      ): void | Promise<void>
      /**
      * được gọi khi Page được show hoặc mở lại từ background
      * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
      */
      onShow(
        this: R,
      ): void | Promise<void>
      /**
       * được gọi sau khi page finish render lần đầu tiên
       * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
       */
      onReady(
        this: R,
      ): void | Promise<void>
      /**
      * được gọi sau Page bị hide hoặc enter background
      * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
      */
      onHide(
        this: R,
      ): void | Promise<void>
      /**
      * được gọi khi page bị destroy
      * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
      */
      onUnload(
        this: R,
      ): void | Promise<void>

      /**
       * onPullDownRefresh được gọi khi user pull to refresh hoặc gọi my.startPullDownRefresh.
       * Sử dụng callback này để refresh lại data.
       * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
       */
      onPullDownRefresh(
        this: R,
      ): void | Promise<void>
      /**
      * được gọi khi user thực hiện tác vụ "Chia sẻ" trong options menu.
      * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
      */
      onShareAppMessage(
        this: R,
        options: OnShareAppMessageOptions
      ): IOnShareAppMessageResult
    }
  }
/**
 * `Page()` là constructor function cho các pages mà user defines
 *
 *  _Page constructor does not require `new` operator_
 */
declare const Page: tinitypes.Page.Constructor
/**
  * getCurrentPages() là global method được sử dụng để lấy stack của page hiện tại.
  * Kết quả trả về là array các pages với phần tử đầu tiên là home, phần từ cuối cùng là page hiện tại.
  * https://developers.tiki.vn/docs/framework/miniapp-page/get-current-pages
  */
declare const getCurrentPages: tinitypes.Page.GetCurrentPages

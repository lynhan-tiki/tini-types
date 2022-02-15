/// <reference no-default-lib="true"/> 









declare namespace tinitypes.Page {
  type UNACCESSIBLE_KEYS_IN_PAGE
    = "onLoad"
    | "onShow"
    | "onReady"
    | "onHide"
    | "onUnload"
    | "onPullDownRefresh"
    | "onShareAppMessage"
  type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> }
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
    <TData, TCustom>(
      options: Options<TData, TCustom>
    ): void
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


  type CustomOption = Record<string, any>
  type DataOption = Record<string, any>

  interface InstanceMethods<D> {
    setData(
      data: Partial<D> & AnyObject,
      callback?: () => void
    ): void


  }
  type InstanceMethods<D> = InstanceMethods<D>

  interface Data<D> {
    data: D
  }


  interface GetCurrentPages {
    (): Array<Instance<AnyObject, AnyObject>>
  }


  type OnShareAppMessageOptions =
    | {
      from: "button";
      target: Record<string, any>;
      webViewUrl?: string;
    }
    | {
      from: "menu";
      webViewUrl?: string;
    };

  interface IOnShareAppMessageResult {
    title: string;
    desc?: string;
    path: string;
    content?: string;
    imageUrl?: string;
    bgImgUrl?: string;
    success?(): void;
    fail?(): void;
  }

  type IPageScrollEvent =
    | [
      {
        readonly scrollTop: number;
        readonly scrollHeight: number;
      },
      null,
      null
    ]
    | {
      readonly scrollTop: number;
      readonly scrollHeight: number;
    };



}


/// <reference no-default-lib="true"/> 









declare namespace tinitypes.Page {
  type UNACCESSIBLE_KEYS_IN_PAGE
  = "onLoad"
|"onShow"
|"onReady"
|"onHide"
|"onUnload"
|"onPullDownRefresh"
|"onShareAppMessage"
  type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> }
  type AnyObject = Record<string, any>
  type Instance<
    TData extends DataOption,
    TCustom extends CustomOption
    > = OptionalInterface<ILifetime> &
    InstanceMethods<TData> &
    Data<TData> &
    TCustom
    
  type Options<
    TData extends DataOption,
    TCustom extends CustomOption
    > = (TCustom &
      Partial<Data<TData>> &
      Partial<ILifetime>) &
    ThisType<
    Omit<Instance<TData, TCustom>,
    UNACCESSIBLE_KEYS_IN_PAGE>
    >
  type TrivialInstance = Instance<AnyObject, AnyObject>
  interface Constructor {
    <TData extends DataOption, TCustom extends CustomOption>(
      options: Options<TData, TCustom>
    ): void
  }
  interface ILifetime {
    /**
     * Page lifecycle
     * onLoad được gọi sau khi Page được khởi tạo.
     * Khi sử dụng my.navigateTo, my.redirectTo,
     * @param query sẽ truyền vào trong query.
     * Format của query: "parameterName=parameterValue¶meterName=parameterValue...".
     * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
     */
    onLoad(
      query: Record<string, string | undefined>
    ): void
    /**
    * được gọi khi Page được show hoặc mở lại từ background
    * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
    */
    onShow(): void
    /**
     * được gọi sau khi page finish render lần đầu tiên
     * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
     */
    onReady(): void
    /**
    * được gọi sau Page bị hide hoặc enter background
    * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
    */
    onHide(): void
    /**
    * được gọi khi page bị destroy
    * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
    */
    onUnload(): void

    /**
     * onPullDownRefresh được gọi khi user pull to refresh hoặc gọi my.startPullDownRefresh.
     * Sử dụng callback này để refresh lại data.
     * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
     */
    onPullDownRefresh(): void
    /**
    * được gọi khi user thực hiện tác vụ "Chia sẻ" trong options menu.
    * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
    */
    onShareAppMessage(
      options: OnShareAppMessageOptions
    ): IOnShareAppMessageResult




  }


  type CustomOption = Record<string, any>
  type DataOption = Record<string, any>

  interface InstanceMethods<D extends DataOption> {
    setData(
      data: Partial<D> & AnyObject,
      callback?: () => void
    ): void


  }
  type InstanceMethods<D extends DataOption> = InstanceMethods<D>

  interface Data<D extends DataOption> {
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


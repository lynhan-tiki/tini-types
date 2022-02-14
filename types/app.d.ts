/// <reference no-default-lib="true"/> 
type Query = Record<string, string | number>;

interface IAppLaunchOptions {
  /**
   * Khi sử dụng my.navigateTo, my.redirectTo, params sẽ truyền vào trong query.
   * Format của query: "parameterName=parameterValue¶meterName=parameterValue...".
   */
  query?: Query;

  path?: string;

  referrerInfo?: {
    appId: string;
    sourceServiceId: string;
    extraData: Record<string, any>;
  };
}


interface AppOptions {
  /**
   * *App lifecycle*。
   *
   * `onLaunch` sẽ được trigger khi lần đầu init app.
   *
   * AppCreate(`onLanch` => `onShow`) => PageCreate(`onLoad` => `onShow` => `onReady`)
   * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
   */
  onLaunch?(options: IAppLaunchOptions): void;

  /**
   * *App lifecycle*。
   *
   * `onShow` sẽ được trigger sau khi hàm `onLaunch`
   *  và trước khi khởi tạo Page.
   *
   * AppCreate(`onLanch` => `onShow`) => PageCreate(`onLoad` => `onShow` => `onReady`)
   * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
   */
  onShow?(options: IAppLaunchOptions): void;

  /**
   * *App lifecycle*。
   *
   * `onShow` sẽ được trigger khi app bị ẩn.
   *
   */
  onHide?(): void;
}
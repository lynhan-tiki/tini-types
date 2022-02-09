/// <reference no-default-lib="true"/>
/// <reference lib="es5"/>
/**
 * `App()` root entry của app
 */
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
declare function App(options: AppOptions): void;
/**
 * Applet cung cấp 1 hàm global là getApp, có thể access ở cả page và component.
 * Hàm getApp trả về instance của application. Ví dụ ở Application, khai báo biến globalData
 * ```js
 * App({
 * globalData: 1
 *  doSomething() {
 *   // bla bla
 *  }
 * })
 * ```
 * Ở page access biến globalData và gọi hàm doSomething
 * ```js
 * // page.js
 * var app = getApp();
 * console.log(app.globalData);
 * app.doSomething()
 * ```
 */
declare function getApp(): any;

/**
 * Page() là 1 instance đại diện cho các pages của app。
 */
/* tslint:disable:no-unnecessary-generics */
interface PageOptions {
  data: any;
  /**
   * Page lifecycle
   * onLoad được gọi sau khi Page được khởi tạo.
   * Khi sử dụng my.navigateTo, my.redirectTo,
   * @params query sẽ truyền vào trong query.
   * Format của query: "parameterName=parameterValue¶meterName=parameterValue...".
   * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
   */
  onLoad?(query: Query): void;

  /**
   * được gọi sau khi page finish render lần đầu tiên
   * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
   */
  onReady?(): void;

  /**
   * được gọi khi Page được show hoặc mở lại từ background
   * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
   */
  onShow?(): void;

  /**
   * được gọi sau Page bị hide hoặc enter background
   * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
   */
  onHide?(): void;

  /**
   * được gọi khi page bị destroy
   * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
   */
  onUnload?(): void;

  /**
   * onPullDownRefresh được gọi khi user pull to refresh hoặc gọi my.startPullDownRefresh.
   * Sử dụng callback này để refresh lại data.
   * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
   */
  onPullDownRefresh?(): void;

  /**
   * được gọi khi user thực hiện tác vụ "Chia sẻ" trong options menu.
   * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
   */
  onShareAppMessage?(
    options: OnShareAppMessageOptions
  ): IOnShareAppMessageResult;
}
declare function Page(options: PageOptions): void;
/* tslint:enable:no-unnecessary-generics */

/**
 * getCurrentPages() là global method được sử dụng để lấy stack của page hiện tại.
 * Kết quả trả về là array các pages với phần tử đầu tiên là home, phần từ cuối cùng là page hiện tại.
 * https://developers.tiki.vn/docs/framework/miniapp-page/get-current-pages
 */
declare function getCurrentPages(): Array<IPageInstance<any>>;

/* tslint:disable:no-unnecessary-generics */
interface ComponentOptions extends IComponentLifeCycleMethods {
  props?: any;
  data?: any;
  methods?: { [method: string]: Function };
}

declare function Component(options: ComponentOptions): void;
/* tslint:enable:no-unnecessary-generics */

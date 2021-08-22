/**
 * `App()` 接受一个 object 作为参数，用来配置小程序的生命周期等。
 */
interface AppOptions {
  /**
   * 生命周期函数。
   *
   * 监听小程序初始化。
   *
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）。
   */
  onLaunch?(options: IAppLaunchOptions): void;

  /**
   * 生命周期函数。
   *
   * 监听小程序显示。
   *
   * 当小程序启动，或从后台进入前台显示，会触发 onShow。
   *
   * **注意:** 不要在 onShow 中进行 redirectTo/navigateTo 等操作页面栈的行为。
   */
  onShow?(options: IAppLaunchOptions): void;

  /**
   * 生命周期函数。
   *
   * 监听小程序隐藏。
   *
   * 当小程序从前台进入后台，会触发 onHide。
   */
  onHide?(): void;

  /**
   * 错误监听函数。
   *
   * 当小程序发生脚本错误，或者 API 调用失败时，会触发 onError 并带上错误信息。
   */
  onError?(error: any): void;

  /**
   * 全局分享配置。
   *
   * 当页面未设置 `page.onShareAppMessage` 时调用分享会执行全局的分享设置。
   */
  onShareAppMessage?(
    options: OnShareAppMessageOptions
  ): IOnShareAppMessageResult;

  /**
   * 当Promise 被 reject 且没有 reject 处理器时触发。也可使用 my.onUnhandledRejection 绑定监听。
   * 参数和注意事项与 my.onUnhandledRejection 一致。
   */
  onUnhandledRejection?(
    options?: my.IOnUnhandledRejectionCallbackOptions
  ): void;
}
declare function App(options: AppOptions): void;
/* tslint:enable:no-unnecessary-generics */

/**
 * 获取小程序实例，一般用在各个子页面之中获取顶层应用。
 */
declare function getApp(): any;

/**
 * Page() 函数用来注册一个页面。
 * 接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
 */
/* tslint:disable:no-unnecessary-generics */
interface PageOptions {
  data: any;
  /**
   * 生命周期函数--监听页面加载
   *
   * @param query query 参数为 my.navigateTo 和 my.redirectTo 中传递的 query 对象。
   */
  onLoad?(query: Query): void;

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady?(): void;

  /**
   * 生命周期函数--监听页面显示
   */
  onShow?(): void;

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide?(): void;

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload?(): void;

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom?(): void;

  /**
   * 返回自定义分享信息
   */
  onShareAppMessage?(
    options: OnShareAppMessageOptions
  ): IOnShareAppMessageResult;

  /**
   * 页面滚动时触发
   *
   * @param event 滚动事件参数
   */
  onPageScroll?(event: IPageScrollEvent): void;
}
declare function Page(options: PageOptions): void;
/* tslint:enable:no-unnecessary-generics */

/**
 * getCurrentPages() 函数用于获取当前页面栈的实例，
 * 以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
 */
declare function getCurrentPages(): Array<IPageInstance<any>>;

/* tslint:disable:no-unnecessary-generics */
interface ComponentOptions {
  props?: any;
  data?: any;
  methods?: IComponentLifeCycleMethods;
}
declare function Component(options: ComponentOptions): void;
/* tslint:enable:no-unnecessary-generics */

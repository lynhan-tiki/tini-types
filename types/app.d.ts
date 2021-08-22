type Query = Record<string, string | number>;

interface IAppLaunchOptions {
  /**
   * 当前小程序的 query，从启动参数的 query 字段解析而来
   */
  query?: Query;

  /**
   * 当前小程序的页面地址，从启动参数 page 字段解析而来，page 忽略时默认为首页
   */
  path?: string;

  /**
   * 来源信息。
   */
  referrerInfo?: {
    /**
     * 来源小程序
     */
    appId: string;

    /**
     * 来源插件，当处于插件运行模式时可见
     */
    sourceServiceId: string;

    /**
     * 来源小程序传过来的数据。
     */
    extraData: Record<string, any>;
  };
}

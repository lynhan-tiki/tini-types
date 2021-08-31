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

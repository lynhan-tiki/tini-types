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

interface IPageEvents {
  onBack?(): void;
  onKeyboardHeight?(): void;
  onOptionMenuClick?(): void;
  onPopMenuClick?(): void;
  onPullIntercept?(): void;

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh?(params: { from: "manual" | "code" }): void;
  onTitleClick?(): void;

  /**
   * 版本要求：基础库 1.11.0 或更高版本，若版本较低，建议做 兼容处理。
   * 点击标签（tab）时触发。
   */
  onTabItemTap?(item: { index: number; pagePath: string; text: string }): void;

  beforeTabItemTap?(): void;
}

type SetDataMethod<D> = (data: Partial<D>, callback?: () => void) => void;

interface ISpliceDataOperations {
  [k: string]: [number, number, ...any[]];
}

type SpliceDataMethod = (
  operations: ISpliceDataOperations,
  callback?: () => void
) => void;

interface IPageInstance<D> extends Record<string, any> {
  /**
   * 页面数据。
   */
  readonly data: D;

  /**
   * 将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
   */
  setData: SetDataMethod<D>;

  /**
   * 同 setData，但是相比于 setData，在处理长列表的时候，其具有更高的性能
   */
  $spliceData: SpliceDataMethod;

  /**
   * Page 路径，对应 app.json 中配置的路径值。
   */
  readonly route: string;

  /**
   * 批量更新数据。
   */
  $batchedUpdates: (fn: () => void) => void;
}

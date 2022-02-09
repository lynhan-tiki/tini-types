/// <reference no-default-lib="true"/>

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
   * onPullDownRefresh được gọi khi user pull to refresh hoặc gọi my.startPullDownRefresh.
   * Sử dụng callback này để refresh lại data.
   */
  onPullDownRefresh?(params: { from: "manual" | "code" }): void;
  onTitleClick?(): void;
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
   * Khởi tạo data cho page.
   */
  readonly data: D;

  /**
   * sử dụng hàm this.setData() để set lại data, page sẽ tự rerender.
   */
  setData: SetDataMethod<D>;
}

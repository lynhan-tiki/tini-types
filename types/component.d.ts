interface IComponentLifeCycleMethods {
  /**
   * 组件生命周期函数，组件创建时触发
   */
  onInit?(): void;

  /**
   * 组件生命周期函数，组件创建时和更新前触发
   *
   * @param nextProps 接收到的 props 数据
   */
  deriveDataFromProps?(nextProps: any): void;

  /**
   * 组件生命周期函数，组件创建完毕时触发
   */
  didMount?(): void;

  /**
   * 组件生命周期函数，组件更新完毕时触发
   */
  didUpdate?(prevProps: any, prevData: any): void;

  /**
   * 组件生命周期函数，组件删除时触发
   */
  didUnmount?(): void;
}

interface IComponentMethods {
  [name: string]: (...args: any[]) => void;
}

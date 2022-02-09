/// <reference no-default-lib="true"/> 
interface IComponentLifeCycleMethods {
  /**
   * được gọi khi Component được khởi tạo
   */
  onInit?(): void;

  /**
   * được gọi sau khi Component được khởi tạo, hoặc khi Component nhận các props mới
   *
   * @param nextProps props
   * Hàm này được gọi sau khi Component nhận các data và props mới. Trong deriveDataFromProps bạn có thể
   *  - Truy cập vào this.is, this.$id, this.$page và các thuộc tính khác
   *  - Truy cập vào this.data, this.props
   *  - Truy cập vào custom properties và methods
   *  - Gọi các hàm this.setData và this.$spliceData để thay đổi data
   *  - Sử dụng nextProps để lấy ra các thuộc tính mới sẽ được update
   */
  deriveDataFromProps?(nextProps: any): void;

  /**
   * `didMount` được gọi sau khi Custom Component được render lần đầu tiên.
   * Chúng ta có thể sử dụng hàm này để trigger việc load data từ server
   */
  didMount?(): void;

  /**
   * `didUpdate` được gọi sau khi data của Component được update.
   * Hàm này được gọi mõi khi data trong Component thay đổ
   */
  didUpdate?(prevProps: any, prevData: any): void;

  /**
   * `didUnmount` được gọi khi Component được unmount.
   */
  didUnmount?(): void;
}

interface IComponentMethods {
  [name: string]: (...args: any[]) => void;
}

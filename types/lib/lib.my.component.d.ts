/*! *****************************************************************************
Copyright (c) 2022 TIKI COMPANY LIMITED. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************** */

declare namespace tinitypes.Component {

  interface LifeCycles<D, P> {
    /**
     * `onInit` được gọi khi Component được khởi tạo
     */
    onInit?(): void
    /**
     *  `deriveDataFromProps` được gọi sau khi Component được khởi tạo, hoặc khi Component nhận các props mới
     *
     * Trong deriveDataFromProps bạn có thể
     *  - Truy cập vào this.is, this.$id, this.$page và các thuộc tính khác
     *  - Truy cập vào this.data, this.props
     *  - Truy cập vào custom properties và methods
     *  - Gọi các hàm this.setData và this.$spliceData để thay đổi data
     *  - Sử dụng nextProps để lấy ra các thuộc tính mới sẽ được update
     */
    deriveDataFromProps?(
      /**
       * `nextProps` next props to be sending to component
       */
      nextProps: Partial<P>): void
    /**
     *
     * `didMount` được gọi sau khi Custom Component được render lần đầu tiên.
     * Chúng ta có thể sử dụng hàm này để trigger việc load data từ server
     *
     */
    didMount?(): void
    /**
    * `didUpdate` được gọi sau khi data của Component được update.
    */
    didUpdate?(
      /**
       * previous this.props received
       */
      prevProps: P,
      /**
       * previous this.data
       */
      prevData: D): void
    /**
     * `didUnmount` được gọi khi Component được unmount.
     */
    didUnmount?(): void
  }
  interface ComponentMethods {
    /**
     * User define methods, using to handle logic and UI events
     */
    [name: string]: (...args: any[]) => any
  }
  interface Instance<P, D> extends Record<string, any> {
    /**
     * Component's state
     * @see https://developers.tiki.vn/docs/framework/overview#reactive-data-binding
     */
    readonly data: D
    /**
     * Component's default properties
     */
    readonly props: P
    /**
     * Component's update state method
     * @see https://developers.tiki.vn/docs/framework/overview#reactive-data-binding
     */
    setData: (data: Partial<D>&{[k:string]:any}, callback?: () => void) => void
  }

  type ComponentOptions<
    P extends Record<string, any> = Record<string, any>,
    D = any,
    M = ComponentMethods
    > = LifeCycles<D, P> & {
      data?: D
      props?: P
      [key: string]: any
      methods?: M & ThisType<Instance<P, D> & M> & ComponentMethods
      constraint?: Record<string, any>
    } & ThisType<Instance<P, D> & M>

  interface Constructor {
    <Props, Data, Methods>(
      options: ComponentOptions<Props, Data, Methods>
    ): void
  }
}

/**
 * `Component` là constructor cho các custom component mà user define
 *
 *  _This constructor does not require the `new` operator_
 *
 * @example
 *
 * ```js
  Component({
    data: { y: 2 },
    props: { x: 1 },
    onInit() {},
    didMount() {},
    didUpdate(prevProps, prevData) {},
    didUnmount() {},
    deriveDataFromProps() {},
    methods: {
      onMyClick(ev) {
        my.alert({});
        this.props.onXX({ ...ev, e2: 1 });
      }
    }
  });
 * ```
 */
declare const Component: tinitypes.Component.Constructor

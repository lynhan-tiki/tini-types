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


    interface LifeCycles<R, D, P> {

      /**
       * @function
       * `Component.onInit` được gọi khi Component được khởi tạo
       */
      onInit(this: R): void | Promise<void>

      /**
       * @function
       *  `Component.deriveDataFromProps` được gọi sau khi Component được khởi tạo, hoặc khi Component nhận các props mới
       *
       * @param `nextProps` next props sending to component
       *
       * Trong deriveDataFromProps bạn có thể
       *  - Truy cập vào this.is, this.$id, this.$page và các thuộc tính khác
       *  - Truy cập vào this.data, this.props
       *  - Truy cập vào custom properties và methods
       *  - Gọi các hàm this.setData và this.$spliceData để thay đổi data
       *  - Sử dụng nextProps để lấy ra các thuộc tính mới sẽ được update
       */
      deriveDataFromProps(this: R, nexProps: P): void | Promise<void>

      /**
       * @function
       * `didMount` được gọi sau khi Custom Component được render lần đầu tiên.
       * Chúng ta có thể sử dụng hàm này để trigger việc load data từ server
       *
       */
      didMount(this: R): void | Promise<void>

      /**
       * @function
     * `Component.didUpdate` được gọi sau khi data của Component được update.
     * Hàm này được gọi mõi khi data trong Component thay đổ
     * @param prevProps previous this.props received
     * @param prevData previous this.data
     */

      didUpdate(this: R, prevProps: P, prevData: D): void | Promise<void>

      /**
       * @function
       *
       * `Component.didUnmount` được gọi khi Component được unmount.
       *
       */

      didUnmount(this: R): void | Promise<void>
    }
    type AnyObject = Record<string, any>
    type Instance<TData, TProps, TCustom> = InstanceMethods<TData> &
      Data<TData> &
      Props<TProps> &
      TCustom & AnyObject

    type Options<TData, TProps, TCustom> = Partial<{methods:Partial<TCustom> & ThisType<Instance<TData, TProps, TCustom>> }> &
      Partial<Data<TData>> &
      Partial<Props<TProps>> &
      Partial<
        LifeCycles<
          Instance<TData, TProps, TCustom>,
          TData,
          TProps
          >
        > &
      ThisType<Instance<TData, TProps, TCustom>>

    interface Constructor {
      <TData extends AnyObject, TProps extends AnyObject, TCustom extends AnyObject>(
        options: Options<TData, TProps, TCustom>
      ): void
    }





    interface InstanceMethods<D> {
      setData(
        data: Partial<D> & AnyObject,
        callback?: () => void
      ): void


    }
    interface Data<D> {
      data: D
    }
    interface Props<P> {
      props: P
    }

    interface Custom<T> {
      methods: T
    }

  }


/**
 * Component() là constructor function cho các custome component mà user defines
 * This constructor does not require `new` operator
 */
declare const Component: tinitypes.Component.Constructor
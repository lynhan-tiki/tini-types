/// <reference no-default-lib="true"/> 
/// <reference path="entitites.d.ts"/>

declare namespace tinitypes.Component {

   



 
  type UNACCESSIBLE_KEYS_IN_COMPONENT = "methods" | "onInit" | "deriveDataFromProps" | "didMount" | "didUpdate" | "didUnmount"

  type ComponentFunctionRef<REF, D, P> =
    Omit<
      REF,
      UNACCESSIBLE_KEYS_IN_COMPONENT
    >
    & tinitypes.Entities.UPDATE_VIEW_DATA_METHODS<D>
    & { readonly props: P & tinitypes.Entities.AnyObject }

  interface ComponentOptions<D, P, M> {
    /**
     * @property data Object which is binded one way to the UI, pls make sure you only update `this.data` via `this.setData`
     */
    data?: D;
    /**
     * @property props Object which is default value of props sending from parent Node(from Component or Page)
     */
    props?: P;
    /**
   * @property methods Object included methods defined by user
   */
    readonly methods?:  {
      [K in keyof M]: M[K] extends number | string | undefined | null ? M[K] & ThisType<M> :
      ((this:
        ComponentFunctionRef<ComponentOptions<D, P, M>, D, P>
          & {
            [K in keyof M]: M[K] extends number | string | undefined | null ? M[K] :
              ((this: ComponentFunctionRef<ComponentOptions<D, P, M>, D, P> & M, ...params?: any[]) => ReturnType<M[K]>)
          }
        , ...params?: any[]) => ReturnType<M[K]>)
      
    } ;
    // & ThisType<M & ComponentFunctionRef<ComponentOptions<D, P, M>, D, P>>;

    /**
     * @function
     * `Component.onInit` được gọi khi Component được khởi tạo 
     */
    onInit?(this:
      ComponentFunctionRef<ComponentOptions<D, P, M>, D, P>
      & {
        [K in keyof M]: M[K] extends number | string | undefined | null ? M[K] :
        ((this: ComponentFunctionRef<ComponentOptions<D, P, M>, D, P> & M, ...params?: any[]) => ReturnType<M[K]>)
      }

    ): void;

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
    deriveDataFromProps?(this: ComponentFunctionRef<ComponentOptions<D, P, M>, D, P>
      & { [k in keyof M]: (this: ComponentFunctionRef<REF, D, P, M>) => any },
      nexProps: P
    ): void;

    /**
     * @function
     * `didMount` được gọi sau khi Custom Component được render lần đầu tiên.
     * Chúng ta có thể sử dụng hàm này để trigger việc load data từ server
     *  
     */
    didMount?(this: ComponentFunctionRef<ComponentOptions<D, P, M>, D, P>
      & { [k in keyof M]: (this: ComponentFunctionRef<REF, D, P, M>) => any },

    ): void;

    /**
     * @function
   * `Component.didUpdate` được gọi sau khi data của Component được update.
   * Hàm này được gọi mõi khi data trong Component thay đổ
   * @param prevProps previous this.props received
   * @param prevData previous this.data
   */

    didUpdate?(this: ComponentFunctionRef<ComponentOptions<D, P, M>, D, P>
      & { [k in keyof M]: (this: ComponentFunctionRef<REF, D, P, M>) => any },
      prevProps: P, prevData: D
    ): void;

    /**
     * @function
     *  
     * `Component.didUnmount` được gọi khi Component được unmount.
     * 
     */

    didUnmount?(this: ComponentFunctionRef<ComponentOptions<D, P, M>, D, P>
      & { [k in keyof M]: (this: ComponentFunctionRef<REF, D, P, M>) => any });
  }


}


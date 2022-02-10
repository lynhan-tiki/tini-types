/// <reference no-default-lib="true"/> 



 

  interface UserDefineMethod<SCOPE, P extends readonly any[] = any[], RETURN = void> {
    (
      this: SCOPE,
      ...params: P
    ): RETURN;
  }

   
  interface UpdateMethods<DATA>{
    setData(updater: Partial<DATA>, callback?: (data: DATA) => void): Promise<void>;
    setData(updater: (data: DATA) => Partial<DATA>, callback?: (data: DATA) => void): Promise<void>;
  }

  type FunctionRef<REF, DATA, PROPS, M> =
    Omit<
        REF,
        "methods" | "onInit" | "deriveDataFromProps" | "didMount" | "didUpdate" | "didUnmount"
      >
    & UpdateMethods<DATA>
    & { props: PROPS }
    & M;

  interface ComponentOptions<DATA, PROPS, M> {
    data?: DATA;
    props?: PROPS;
    methods?: {
      [key: string]: UserDefineMethod<
        FunctionRef<ComponentOptions<DATA, PROPS, M>, DATA, PROPS, M>,
        [], any
      >
    };
    /**
     * @function
     * `Component.onInit` được gọi khi Component được khởi tạo 
     */
    onInit?: UserDefineMethod<
      FunctionRef<ComponentOptions<DATA, PROPS, M>, DATA, PROPS, M>
    >;

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
    deriveDataFromProps?: UserDefineMethod<
      FunctionRef<ComponentOptions<DATA, PROPS, M>, DATA, PROPS, M>,
      [nexProps: PROPS],
      void
    >;

    /**
     * @function
     * `didMount` được gọi sau khi Custom Component được render lần đầu tiên.
     * Chúng ta có thể sử dụng hàm này để trigger việc load data từ server
     *  
     */
    didMount?: UserDefineMethod<
      FunctionRef<ComponentOptions<DATA, PROPS, M>, DATA, PROPS, M>
    >;
    /**
     * @function
   * `Component.didUpdate` được gọi sau khi data của Component được update.
   * Hàm này được gọi mõi khi data trong Component thay đổ
   * @param prevProps previous this.props received
   * @param prevData previous this.data
   */
    didUpdate?: UserDefineMethod<
      FunctionRef<ComponentOptions<DATA, PROPS, M>, DATA, PROPS, M>,
      [prevProps: PROPS, prevData: DATA],
      void
    >;
    /**
     * @function
     *  
     * `Component.didUnmount` được gọi khi Component được unmount.
     * 
     */

    didUnmount?: UserDefineMethod<
      FunctionRef<ComponentOptions<DATA, PROPS, M>, DATA, PROPS, M>
    >;
  }



  declare function Component<D = {}, P = {}, M = {}> 
    (options: ComponentOptions<D, P, M>): void
  
 

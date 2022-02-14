/// <reference no-default-lib="true"/>
/// <reference lib="es5"/>

/**
 * `App()` là constructor function của app instance, cũng là root entry của app
 * This constructor does not require `new` operator
 */
declare function App(options: AppOptions): void;
/**
 * Applet cung cấp 1 hàm global là getApp, có thể access ở cả page và component.
 * Hàm getApp trả về instance của application. Ví dụ ở Application, khai báo biến globalData
 * ```js
 * App({
 * globalData: 1
 *  doSomething() {
 *   // bla bla
 *  }
 * })
 * ```
 * Ở page access biến globalData và gọi hàm doSomething
 * ```js
 * // page.js
 * var app = getApp();
 * console.log(app.globalData);
 * app.doSomething()
 * ```
 */
declare function getApp(): any;

/**
 * Page() là constructor function cho các pages mà user defines
 * This constructor does not require `new` operator
 */ 
declare let Page: tinitypes.Page.Constructor
/**
 * getCurrentPages() là global method được sử dụng để lấy stack của page hiện tại.
 * Kết quả trả về là array các pages với phần tử đầu tiên là home, phần từ cuối cùng là page hiện tại.
 * https://developers.tiki.vn/docs/framework/miniapp-page/get-current-pages
 */
declare let getCurrentPages: tinitypes.Page.GetCurrentPages

/**
 * Component() là constructor function cho các custome component mà user defines
 * This constructor does not require `new` operator
 */ 
declare function Component<Data = {}, Props = {}, Methods = {}>
  (
    options: tinitypes.Component.ComponentOptions<Data, Props, Methods>
  ): void
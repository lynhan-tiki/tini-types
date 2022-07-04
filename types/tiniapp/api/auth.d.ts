
declare namespace my {
  interface IIsLoggedIn {
    // Callback function khi thành công.
    success?: (res: boolean) => void
    // Callback function khi thất bại.
    fail?: () => {}
    // Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.
    complete?: () => void
  }
  /**
   * `my.isLoggedIn` là API để kiểm tra user đã logged in hay chưa.
   * https://developers.tiki.vn/docs/api/open/is-logged-in
   */
  function isLoggedIn(params: IIsLoggedIn): void

  /**
   * `my.getUserInfo` llà API để lấy các thông tin cơ bản của users (tên, ảnh, số điện thoại, email và tiki user id)
   * Để lấy được email và phone, bạn cần thêm quyền getUserPhoneAndEmail. Chi tiết có thể xem [tại đây](https://developers.tiki.vn/docs/api/backend-permission)
   *
   * @example
   *
   * ```js
      Page({
        onLoad() {
          my.getUserInfo({
            success: (data) => {console.log(data.customerId)},
          });
        }
      });
   * ```
   */
  function getUserInfo(options: {
    /**
     * Success callback function with result.
     */
    success?(result: {
      /*
       * Tiki user id,
       */
      customerId: string
      /*
       * avatar URL
       */
      avatar: string
      /*
       * user's full name,
       */
      name: string
      /*
       * user's email, need `getUserPhoneAndEmail` permission,
       */
      email: string
      /*
       * user's phone number, need `getUserPhoneAndEmail` permission.
       */
      phone: string
    }): void

    /**
     * on failed callback function
     */
    fail?(error?: any): void

    /**
     * on completed callback function
     */
    complete?(): void
  }): void
}

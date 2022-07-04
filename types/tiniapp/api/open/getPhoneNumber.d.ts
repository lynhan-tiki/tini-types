
declare namespace my {
  interface IGetPhoneNumberSuccessResult {
    readonly response: string
  }

  interface IGetPhoneNumberOptions {
    success?(res: IGetPhoneNumberSuccessResult): void
    fail?(res: any): void
  }

  /**
   * chưa hỗ trợ
   */
  function getPhoneNumber(options: IGetPhoneNumberOptions): void
}

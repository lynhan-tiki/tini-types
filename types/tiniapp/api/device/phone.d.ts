
declare namespace my {
  interface IMakePhoneCallOptions {
    number: string
  }

  /**
   * chưa hỗ trợ
   */
  function makePhoneCall(options: IMakePhoneCallOptions): void
}

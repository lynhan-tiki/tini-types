import { expectType } from 'tsd'

expectType<void>(Page({}))

expectType<undefined|{}>(getCurrentPages()[0].data)

type UserInfo =  any
const app = getApp<{
  globalData: {
    userInfo: UserInfo
  }
  userInfoReadyCallback(userInfo: UserInfo): void
}>()



// interface PageCustom  {
//     bindViewTap(this:any): void
// }
Page({
    data: {
        motto: 'test ',
        userInfo: {},
        hasUserInfo: false,
        canIUse: my.canIUse('button.open-type.getUserInfo'),
    },
    bindViewTap() {
        my.navigateTo({
            url: '../logs/logs',
        })
    },
    onLoad() {
        // expectType<PageCustom['bindViewTap']>(this.bindViewTap)

        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            })
        } else if (this.data.canIUse) {
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res,
                    hasUserInfo: true,
                })
            }
        } else {
            my.getUserInfo({
                success: res => {
                    app.globalData.userInfo = {}
                    app.globalData.userInfo.customerId = res.customerId
                    this.setData({
                        userInfo:  app.globalData.userInfo,
                        hasUserInfo: true,
                    })
                },
            })
        }
    },

    getUserInfo(e: any) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        })
    },
})

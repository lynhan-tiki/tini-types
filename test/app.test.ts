import { expectType } from 'tsd'

expectType<void>(App({}))

App({
    globalData: {
        userInfo: {} ,
    },
    onLaunch() {
        expectType<{}>(this.globalData.userInfo)

    },
})

expectType<tinitypes.App.Instance<Record<string, any>>>(getApp())

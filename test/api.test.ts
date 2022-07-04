import { expectType, expectNotType } from 'tsd'

my.request({
    url: 'https://www.tiki.vn',
    success(res) {
        expectType<string>(res.data)
        expectNotType<{}>(res.data)
    },
})
my.request<ArrayBuffer>({
    url: 'https://www.tiki.vn',
    success(res) {
        expectType<ArrayBuffer>(res.data)
    }
})

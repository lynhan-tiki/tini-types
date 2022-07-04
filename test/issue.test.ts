import { expectType } from 'tsd'

// https://github.com/tikivn/tini-types/issues/123
my.request<number>({
    url:'https://www.tiki.vn',
    success(res) {
        expectType<number>(res.data)
    },
})

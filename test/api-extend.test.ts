



import { expectType } from 'tsd'

// user could extend if they want
declare namespace my {
    function customMethod<T>(a: number): T
}

expectType<string>(my.customMethod<string>(1))


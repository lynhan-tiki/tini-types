import { expectType } from 'tsd'

expectType<void>(Component({}))

Component({
    props:{testprops:'haha'},
    data: {
        text: 'init data',
        array: [{ msg: '1' }, { msg: '2' }],
        logs: [] as string[],
    },
    didMount() {
        this.setData({text:'tesx'})
    },
    didUpdate(prevProps, prevData) {
        expectType<string>(prevProps.testprops)
        expectType<string >(prevData.text)
    },
    methods: {
        onMyButtonTap() {
            expectType<string>(this.data.text)
            this.setData({text:'tesx'})
        },
        _myPrivateMethod() {
            this.setData({
                'A[0].B': 'myPrivateData',
            })
        },
        _propertyChange(newVal: number, oldVal: number) {
            expectType<number>(newVal)
            expectType<number>(oldVal)
        },
    },
})
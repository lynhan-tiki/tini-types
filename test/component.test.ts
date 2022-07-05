import { expectType } from 'tsd'

var test = console.log


test('Component constructor return type void',()=>{
    expectType<void>(Component({}))
})

test('Component mapped `this` to methods',()=>{

    Component({
        props:{testprops:'haha'},
        data: {
            text: 'init data',
            array: [{ msg: '1' }, { msg: '2' }],
            logs: [] as string[],
        },
        didMount() {
            test('should have this.data in lifecycle didMount',()=>{
                expectType<tinitypes.Component.Instance<typeof this.props, typeof this.data>['setData']>(this.setData)
            })
            this.setData({text:'tesx'})
        },
        didUpdate(prevProps, prevData) {
            expectType<string>(prevProps.testprops)
            expectType<string>(prevData.text)
        },
        methods: {
            onMyButtonTap() {
                expectType<string>(this.data.text)
                this.setData({text:'tesx'})
            },
            _myPrivateMethod() {
                this.setData({
                    'A[0].B': 'myPrivateData',
                    text:'sef'
                })
            },
            _propertyChange(newVal: number, oldVal: number) {
                expectType<number>(newVal)
                expectType<number>(oldVal)
            },
        },
    })
})
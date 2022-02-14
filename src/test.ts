


/// <reference path="../types/index.d.ts"/>
// / <reference lib="dom"/>


declare var console : any
type Methods = {
  noBug(): void;
  onClick(): void;
  onTap(): void;
  hello: string;
};
type Props = {
  defaultPropsString: string,
  defaultPropsMethod(): void;
}
type Data = {
  test: string,
  num: number
}

Component
  // <Data, Props, Methods>
  (
    {
      onInit() {
        this.data.num;
        this.data.num;
        this.props.defaultPropsString;
        this.setData({ test: 'nana' })
        this.setData({ test: 'nana', notDefinedKey: "lalala" })
        this.setData(d => ({ test: 'nana', num: d.num }), data => {
          console.log({ 'updated': data })
        })

        this.props.defaultPropsMethod();
        this.onTap();
        this.onClick();
        this.onClick("hell");
        this.noBug
        this.hello
        this.data.num;
        this.data
      },
      didMount() {
        // this.
      },
      props: {
        defaultPropsString: "omg",
        defaultPropsMethod: () => {

        },
        test() {

        }
      },
      data: {
        test: "hello",
        num: 5,
      },
      methods: {
        noBug() {
          this.onClick();
          this.hello;
          this.data.num;
          this.props.defaultPropsMethod
        },
        hello: "string here",
        onClick(eventName: string): string {
          this.hello;
          this.noBug()
          this.onTap;
          return eventName;
        },
        onTap() {
          this.data.num;
          this.onClick("hell");
        },
      },
    });


Page
<
  {
    pageName: string;
  }, {
    userMethod(test: string): string
  }>
  ({
    data:{pageName:'string'},
    userMethod(test:string):string{
      return test;
    }
  })
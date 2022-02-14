


/// <reference path="../types/index.d.ts"/> 
/// <reference no-default-lib="true"/> 


Component({
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
    // this.methods.onTap();
    this.handleClick();
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
  },
  data: {
    test: "hello",
    num: 5,
  },
  methods: {
    noBug: function (e) {
      console.log(e);
      this.handleClick();
      this.hello;
      this.data.num;
      this.props.defaultPropsMethod()
    },

    hello: "string here",

    handleClick() {
      this.hello;
      this.noBug({});
      this.onTap();
      this.props;
      this;

    },
    onTap: ()=> {
      fetch
      this.handleClick();
      
    },
  },

}); 





Page({
  data:{ pageName:"hello page" },
  onLoad(q){
     this.setData;
     this.data.pageName;
     this.userMethods();
     this.onLoad;
     this.setData()
     console.log(q)
  },
  userMethods(test){
    this.userMethods();
    return test +" string "}
})











 
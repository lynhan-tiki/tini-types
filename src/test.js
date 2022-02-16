


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
    /**
     * test func
     * @param {string} event
     * @returns {string} 
     */
    noBug: function (event) {
      console.log(event);
      this.handleClick();
      this.hello;
      this.setData(d => ({ test: 'nana', num: d.num }), data => {
        console.log({ 'updated': data })
      })

      this.data.num;
      this.props.defaultPropsMethod()
      return event + ' '
    },

    hello: "string here",

    handleClick() {
      this.hello;
      this.noBug('sef');
      this.onTap();
      this.props;
      this;

    },
    onTap: () => {

      this.handleClick();

    },
  },

});





Page({
  data: { pageName: "hello page" },
  onLoad(q) {
    this.setData;
    this.data.pageName;
    this.userMethods();
    this.onLoad;
    this.setData()
    console.log(q)
  },
  userMethods(test) {
    this.userMethods();
    return test + " string "
  }
})












Page({
  data: {
    name: "lalala"
  },
  /**
   * 
   * @param {string} name 
   */
  userMethod(name) {
    if (this.data.name.charCodeAt(0) === "l".charCodeAt(0)) {
      this.setData({ name })
    }
  },
  esf: "",
  onLoad(query) {
    this.userMethod('funny')
  }
})


App({
  data: { test: 'tr' },
  globalData: { test: 'tr' },
  userMethod() {
    this.userMethod();
    this.data.test;
  },
  onLaunch({ path }) {
    if (typeof path === 'string') {
      this.data;
      this.globalData;
      this.userMethod();

    }
  }
})
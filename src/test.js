


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
  haha:2,
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
      this.haha
      this.fesaf;
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
      this.onLaunch()

    }
  }
})






 
 
  const quart = Math.PI / 2;
  const PI2 = Math.PI * 2;
  let percent = 0;



  Component({
    onInit() {
      this.data;
      my.getSystemInfo({
        success: (data) => {
          this.setData({ PIXEL_RATIO: data.pixelRatio });
        },
      });
    },
    props:{},
    data: { PIXEL_RATIO: 2 },
    deriveDataFromProps(nextProps) {
      // if (nextProps.done) {
      //   this.loadDone();
      // }
    
      if (nextProps.failed) {
        this.loadFailed();
      }
      if (nextProps.active) {
        !this.initAnimated && this.initAnimate();
      }
    },
    didUnmount() {
      clearInterval(this.interval);
    },
    methods:{
      // interval:null,
      initAnimate() {
        this.canvas = {
          width: 400 * this.data.PIXEL_RATIO,
          height: 400 * this.data.PIXEL_RATIO,
        };
        this.guages = [
          {
            x: 100 * this.data.PIXEL_RATIO,
            y: 100 * this.data.PIXEL_RATIO,
            radius: 98 * this.data.PIXEL_RATIO,
            start: 0,
            end: 100,
            // color: "rgba(0, 0, 0, 0.1)",
            color: "#2E1CA7",
            showText: false,
            lineWidth: 2.5 * this.data.PIXEL_RATIO,
          },
          {
            x: 100 * this.data.PIXEL_RATIO,
            y: 100 * this.data.PIXEL_RATIO,
            radius: 98 * this.data.PIXEL_RATIO,
            start: 0,
            end: 100,
            color: "#fff",
            showText: false,
            lineWidth: 2 * this.data.PIXEL_RATIO,
          },
        ];
        this.context = my.createCanvasContext("app--play-now-loading--loading");
        this.context.lineWidth = 2 * this.data.PIXEL_RATIO;
        this.context.shadowOffsetX = 0;
        this.context.shadowOffsetY = 0;
        this.context.shadowBlur = 0;
        this.interval = setInterval(this.draw.bind(this), 17);
        percent = 0;
        this.initAnimated = true;
      },
      render(guage, percent) {
        const pct = percent / 100;
        const extent = parseInt((guage.end - guage.start) * pct);
        const current = ((guage.end - guage.start) / 100) * PI2 * pct - quart;
        this.context.beginPath();
        this.context.lineWidth = guage.lineWidth;
        this.context.arc(guage.x, guage.y, guage.radius, -quart, current);
        this.context.strokeStyle = guage.color;
        this.context.stroke();
        this.context.fillStyle = guage.color;
        guage.showText &&
        this.context.fillText(extent, guage.x - 15, guage.y + 5);
      },
      drawAll(percent) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.render(this.guages[1], 100);
        this.render(this.guages[0], percent);
        this.context.draw();
      },
      draw() {
        try {
          this.drawAll(percent);
          // percent += 0.5;
          // percent += 0.6;
          percent += 2;
        } catch (error) {
          console.error("draw fail", error);
        }
        if (percent > 100 && !this.props.failed) {
          if (this.props.done) {
            this.loadDone();
            return;
          }
          percent = 0;
          this.guages = this.guages.reverse();

        // this.loadDone();
        // this.loadFailed();
        }
      },
      loadDone() {
        clearInterval(this.interval);
        if (this.props.onDone) this.props.onDone();
      },
      loadFailed() {
        clearInterval(this.interval);
        this.setData({ failed: true });
      },
    }
  });
 

<template>
    <div :class="customClass">
        <div class="font-black">{{title.toUpperCase()}}</div>
        <trend
            :data="cryptoData"
            :gradient="customGradient"
            :width="windowWidth"
            :height="windowHeight"
            autoDrawDuration=9000
            stroke-width="2"
            auto-draw
            smooth>
        </trend>
    </div>
</template>

<script>
export default {
  name: 'SparkLine',
  props: {
    title:{
      type: String
      },
    plotDays: {
      type: Number,
      default: 365
    },
    customClass:{
      type: String
    },
    currency: {
      type: String,
      default:'eth'
    }
    // ,
    // customGradient: {
    //   type: Array,
    //   default: (() => ['violet', 'blue', 'red']),
    // }
  },
  data() {
    return {
      cryptoData: [],
      windowHeight: 100,
      windowWidth: window.innerWidth * 5 / 6,
      //gradient: this.customGradient,
      iconName: 'bug',
    };
  },
  computed: {
    customGradient () {
      // return ['violet', 'blue', 'red'];
      // return ['#'+Math.floor(Math.random()*16777215).toString(16),'red','blue'];
      return ['#'+Math.floor(Math.random()*16777215).toString(16),'violet','#'+Math.floor(Math.random()*16777215).toString(16)];
      // return ['#'+Math.floor(Math.random()*8242408).toString(16),'#'+Math.floor(Math.random()*16215708).toString(16),'#'+Math.floor(Math.random()*5431520).toString(16)];
      // return ['#'+Math.floor(Math.random()*16777215).toString(16),'#'+Math.floor(Math.random()*16777215).toString(16),'#'+Math.floor(Math.random()*16777215).toString(16)];
    },
    cryptoCurrency() {
      return this.currency.toUpperCase();
    },
  },
  methods: {
    async getCryptoDataFromAPI() {
      try{
        const tempdata = [];
        let response = fetch(`https://min-api.cryptocompare.com/data/histoday?aggregate=1&e=CCCAGG&extraParams=CryptoCompare&fsym=${this.cryptoCurrency}&limit=${this.plotDays}&tryConversion=false&tsym=USD`, {
        method: 'GET',
        }).then(response => response.json());
        let cData = await response;
        cData.Data.map((d) => {
          tempdata.push({
            value: d.close,
          });
          
        });
        this.cryptoData = tempdata;
      }
      catch (err){      
      }  
    },

    handleResize() {
      this.windowWidth = (window.innerWidth * 5 / 6);
    },
    getIconName() {
      switch (this.currency) {
        case 'btc':
          this.iconName = 'bitcoin';
          break;
        case 'ltc':
          this.iconName = 'circle';
          break;
        case 'eth':
          this.iconName = 'diamond';
          break;
        default:
          this.iconName = 'bug';
      }
    }
  },
  created() {
    this.windowWidth = (window.innerWidth * 5 / 6);
        this.getCryptoDataFromAPI();
        this.getIconName();
  },
  // updated () {
  //   this.windowWidth = (window.innerWidth * 5 / 6);
  //       this.getCryptoDataFromAPI();
  //       this.getIconName();
  // },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
<style scoped>
.trend{
    /* border: solid 1px rgba(7, 151, 207, 0.3); */
    border: 1px solid #e0ebfc;
    box-shadow: 0 10px 15px 0 rgba(220,227,247,.5);
    border-radius: 10px;
    background: #fff;
    /* background: -webkit-linear-gradient(to bottom, #70e1f5, #fff5e8);
    background: linear-gradient(to left, #c8eaf0, #fff5e8); */
}
</style>

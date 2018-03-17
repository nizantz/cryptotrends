<template>
  <div class="flex flex-col">
    <div>
    <ButtonGroup>
        <Button :type="no_of_days === 7?'primary':'ghost'" @click="truthyValue = false;setDays(7)">7 Days</Button>
        <Button :type="no_of_days === 30?'primary':'ghost'" @click="truthyValue = false;setDays(30)">30 Days</Button>
        <Button :type="no_of_days === 90?'primary':'ghost'" @click="truthyValue = false;setDays(90)">90 Days</Button>
        <Button :type="no_of_days === 120?'primary':'ghost'" @click="truthyValue = false;setDays(120)">120 Days</Button>
        <Button :type="no_of_days === 365?'primary':'ghost'" @click="truthyValue = false;setDays(365)">365 Days</Button>
    </ButtonGroup>
        <p class="p-4 text-lg">Data for Last {{no_of_days}} days</p>
        <p><span>{{startDate}}</span><span> - </span><span>{{endDate}}</span></p>
    </div>
    <div v-if="truthyValue" v-for="(crypto,index) in cryptos" :key="index"> 
      <trend-chart
        customClass="m-2 p-3 border border-red-lightest rounded"
        :title="crypto.name"
        :currency="crypto.symbol"
        :plotDays="no_of_days"
        :customGradient="['pink','#3F5EFB','#FC466B']">
        </trend-chart>
    </div>
  </div>
</template>

<script>
import SparkLine from '../components/SparkLine'
import moment from 'moment-timezone';

export default {
  data () {
    return {
      no_of_days:7,
      truthyValue:true,
      cryptos:[
        {'name':'bitcoin','symbol':'btc'},
        {'name':'bitcash','symbol':'bch'},
        {'name':'litecoin','symbol':'ltc'},
        {'name':'ethereum','symbol':'eth'},
        {'name':'ripple','symbol':'xrp'},
        {'name':'iota','symbol':'iot'},
      ]
    }
  },
  components: {
    'trend-chart': SparkLine,
  },
  computed: {
    startDate (){
      return moment().subtract(this.no_of_days, 'days').format('ll');
    },
    endDate (){
      return moment().format('ll');
    },    
  },
  methods:{
    setDays (days) {
      this.no_of_days = days;    
      setTimeout(() => { this.truthyValue = true; }, 1000);
      
    }
  },
  afterUpdate() {
    this.truthyValue=false;
  }

};
</script>

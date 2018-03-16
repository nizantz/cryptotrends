<template>
  <div class="flex flex-col">
    <div v-for="(crypto,index) in cryptos" :key="index"> 
      <trend-chart
        customClass="m-2 p-3 border border-red-lightest rounded"
        :title="crypto.name"
        :currency="crypto.symbol"
        :customGradient="['pink','#3F5EFB','#FC466B']">
        </trend-chart>
    </div>
  </div>
</template>

<script>
import SparkLine from '../components/SparkLine'

export default {
data () {
  return {
    cryptos:[
      {'name':'bitcoin','symbol':'btc'},
      {'name':'bitcash','symbol':'bch'},
      {'name':'litecoin','symbol':'ltc'},
      {'name':'ethereum','symbol':'eth'},
      {'name':'ripple','symbol':'xrp'},
    ]
  }
},
components: {
    'trend-chart': SparkLine,
  }
};
</script>

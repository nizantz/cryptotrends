import Vue from 'vue'
import Router from 'vue-router'
import CryptoCurrencyTrend from '@/components/CryptoCurrencyTrend'
import CryptoCurrencyTable from '@/components/CryptoCurrencyTable'
import SparkLine from '@/components/SparkLine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CryptoCurrencyTrend',
      component: CryptoCurrencyTrend
    },
    {
      path: '/list',
      name: 'CryptoCurrencyTable',
      component: CryptoCurrencyTable
    }
  ]
})

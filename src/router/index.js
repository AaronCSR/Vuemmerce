import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import TabSell from '@/components/TabSell';
import TabDeals from '@/components/TabDeals';
import TabGiftCards from '@/components/TabGiftCards';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
    },
    {
      path: '/sell',
      name: 'Sell',
      component: TabSell,
    },
    {
      path: '/gift-cards',
      name: 'Gift cards',
      component: TabGiftCards,
    },
    {
      path: '/deals',
      name: 'Deals',
      component: TabDeals,
    },
  ],
});
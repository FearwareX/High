import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Tabbar, TabbarItem, NavBar, Card } from 'vant';
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Tabbar)
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import '@/assets/style/reset.css'
import 'lib-flexible'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('v-icon', Icon)
Vue.directive('lazy',(el,binding)=>{
  var temp = el.src;
  var img = new Image();
  img.src = el.src;
  var imgBg = require('@/assets/imgs/icons/img-bg.png');
  el.src = imgBg;
  img.onload = function(){
      el.src = temp;
  }
  // console.log(el)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(process.env)

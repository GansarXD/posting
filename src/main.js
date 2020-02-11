import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/index.css'
import '@/assets/styles/post-preview.css'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import HighchartsVue from 'highcharts-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VueToast);
Vue.use(HighchartsVue);
Vue.use(VModal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

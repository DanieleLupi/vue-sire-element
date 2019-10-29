import Vue from 'vue'
import App from './demo/App.vue'

import ElementUI from 'element-ui';
 import 'element-ui/lib/theme-chalk/index.css';
import Flex from '@sidline/vue-flex-box';
//import '@sidline/vue-flex-box/dist/vue-flex-box.css'

import SIreElement from './index'

import './styles/sire.scss'

Vue.use(ElementUI);
Vue.use(Flex);
Vue.use(SIreElement)

new Vue({
    render: h => h(App)
}).$mount('#app')
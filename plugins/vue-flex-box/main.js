import Vue from 'vue'
import App from './demo/App.vue'

import Flex from './index'

import './styles/FxItem.scss'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Flex);

new Vue({
    render: h => h(App)
}).$mount('#app')
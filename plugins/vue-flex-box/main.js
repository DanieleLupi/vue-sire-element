import Vue from 'vue'
import App from './demo/App.vue'

import Flex from './index'

import './styles/FxItem.scss'

Vue.use(Flex);

new Vue({
    render: h => h(App)
}).$mount('#app')
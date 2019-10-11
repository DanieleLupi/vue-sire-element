import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Flex from '@sidline/vue-flex-box';
import '@sidline/vue-flex-box/dist/vue-flex-box.css'

// import Flex from '../plugins/vue-flex-box';
// import '../plugins/vue-flex-box/styles/FxItem.scss'

import './styles/sire.scss'

import SICardFlex from "./components/SICardFlex.vue"
import SIBasicCard from "./components/SIBasicCard.vue"
import SIDetailCard from "./components/SIDetailCard.vue"
import SIDividerCard from "./components/SIDividerCard.vue"
import SIListCard from "./components/SIListCard.vue"
//import TabNavFlex from "./components/TabNavFlex.js"
//import TabsFlex from "./components/TabsFlex.js"

const SIreElement = {
  install: function (Vue) {
    Vue.use(ElementUI);
    Vue.use(Flex);
     Vue.component('si-card-flex', SICardFlex);
     Vue.component('si-basic-card', SIBasicCard);
     Vue.component('si-detail-card', SIDetailCard);
     Vue.component('si-divider-card', SIDividerCard);
     Vue.component('si-list-card', SIListCard);
     //Vue.component('si-tab-nav-flex', TabNavFlex);
     //Vue.component('si-tabs-flex', TabsFlex);
  },
  name: 'si-element'
}

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ElementUI);
  window.Vue.use(Flex);
  window.Vue.use(SIreElement);
}

export default SIreElement;
import ElementUI from 'element-ui';
import Flex from '@sidline/vue-flex-box';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/sire.scss'
import CardFlex from "./components/CardFlex.vue"
import BasicCard from "./components/BasicCard.vue"
import DetailCard from "./components/DetailCard.vue"
import DividerCard from "./components/DividerCard.vue"
import ListCard from "./components/ListCard.vue"

const SIreElement = {
  install: function (Vue) {
    Vue.use(ElementUI);
    Vue.use(Flex);
     Vue.component('si-card-flex', CardFlex);
     Vue.component('si-basic-card', BasicCard);
     Vue.component('si-detail-card', DetailCard);
     Vue.component('si-divider-card', DividerCard);
     Vue.component('si-list-card', ListCard);
  },
  name: 'si-element'
}

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ElementUI);
  window.Vue.use(Flex);
  window.Vue.use(SIreElement);
}

export default SIreElement;
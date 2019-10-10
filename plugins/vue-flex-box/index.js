import FxItem from "./components/FxItem"
import FxRow from "./components/FxRow"
import FxCol from "./components/FxCol"


const FlexLayout = {
    install: function(Vue){   
        Vue.component('fx-item', FxItem);
        Vue.component('fx-row', FxRow);
        Vue.component('fx-col', FxCol);
    },
    name: 'vue-flex-box'
}


if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(FlexLayout);
}

export default FlexLayout;
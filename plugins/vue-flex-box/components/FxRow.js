import FxItem from "./FxItem"
import "../styles/FxItem.scss";

export default {
    name: 'fx-row',
    extends: FxItem,
    //functional: true,
    props: {
        fxDirection: { default: "column", type: String }
    }
}
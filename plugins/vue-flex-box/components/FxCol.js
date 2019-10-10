import FxItem from "./FxItem"
import "../styles/FxItem.scss";

export default {
    name: 'fx-col',
    extends: FxItem,
    //functional: true,
    props: {
        fxDirection: { default: "row", type: String }
    }
}
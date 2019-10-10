import { isNumber, isString } from 'util';
// import {Item, createStyleClass} from "./FxItem";
//import "../styles/FxContainer.scss";
import "../styles/FxItem.scss";

const Shared = ["start", "end", "center"];

const AlignContent = Shared.concat(["between", "around", "evenly", "baseline", "stretch"]);
const AlignItems = Shared.concat(["baseline", "stretch"]);
const AlignSelf = ["none", "auto", "start", "end", "center", "baseline", "stretch"];
const Direction = ["none", "column", "row"];
const Gutter = ["none", "small", "medium", "large"];
const JustifyContent = Shared.concat(["between", "around", "evenly"]);


function createItemStyleClass(props) {
  const styles = {};
  const classes = {
    //fxItem: true,
    fxItemFill: props.fxFill,
    fxNoGrow: props.fxNoGrow,
    fxNoShrink: props.fxNoShrink,
    'fxAlign-auto': false,
    'fxAlign-start': false,
    'fxAlign-end': false,
    'fxAlign-center': false,
    'fxAlign-baseline': false,
    'fxAlign-stretch': false,
    'fxGutter-row-small': false,
    'fxGutter-row-medium': false,
    'fxGutter-row-large': false,
    'fxGutter-column-small': false,
    'fxGutter-column-medium': false,
    'fxGutter-column-large': false
  };

  if (props.fxOrder) {
    styles.order = props.fxOrder;
  }

    //calc(50% - var(--gutter-large) * 2)
    console.log("PARENT GUTTER", props.fxParentGutter)    

  if (isNumber(props.fxSize) && props.fxSize > 0) {
    classes.fxNoGrow = true;
    classes.fxNoShrink = true;
    if(props.fxParentGutter === "none") {
      styles["flex-basis"] = props.fxSize + "px";
    } else {
      styles["flex-basis"] = "calc(" + props.fxSize + "px" + " - var(--gutter-" + props.fxParentGutter + ") * 2)";
    }
  } else if (isString(props.fxSize)) {
    classes.fxNoGrow = true;
    classes.fxNoShrink = true;
    if(props.fxParentGutter === "none") {
    styles["flex-basis"] = props.fxSize;
    } else {
      styles["flex-basis"] = "calc(" + props.fxSize + " - var(--gutter-" + props.fxParentGutter + ") * 2)";
    }
  }

  if (props.fxAlign != 'none') {
    classes['fxAlign-' + props.fxAlign] = props.fxAlign;
  }

  if (props.fxParentGutter != 'none') {
    classes['fxGutter-' + props.fxParentDirection + "-" + props.fxParentGutter] = true;
  }

  return { styles, classes }
}

function createContainerStyleClass(props) {
  const styles = {};
  const classes = {
    fxItem: true,
    fxColumn: false,
    fxRow: false,
    fxRowReverse: false,
    fxColumnReverse: false,
    fxWrap: false,
    fxNoWrap: false,
    fxWrapReverse: false,

    'fxJustify-start': false,
    'fxJustify-end': false,
    'fxJustify-center': false,
    'fxJustify-between': false,
    'fxJustify-around': false,
    'fxJustify-evenly': false,

    'fxAlignItems-stretch': false,
    'fxAlignItems-start': false,
    'fxAlignItems-end': false,
    'fxAlignItems-center': false,
    'fxAlignItems-baseline': false,

    'fxAlignContent-stretch': false,
    'fxAlignContent-start': false,
    'fxAlignContent-end': false,
    'fxAlignContent-center': false,
    'fxAlignContent-between': false,
    'fxAlignContent-around': false,
    'fxAlignContent-evenly': false,
    'fxAlignContent-baseline': false
  };

  if (props.fxWrap) {
    classes.fxWrap = true;
    classes.fxNoWrap = false;
    classes.fxWrapReverse = false;
  }
  else if (props.fxWrapReverse) {
    classes.fxWrap = false;
    classes.fxNoWrap = false;
    classes.fxWrapReverse = true;
  }
  else {
    classes.fxWrap = false;
    classes.fxNoWrap = true;
    classes.fxWrapReverse = false;
  }

  if (props.fxDirection == "column") {
    classes.fxColumn = true;
    classes.fxRow = false;
    classes.fxRowReverse = false;
    classes.fxColumnReverse = false;
  }

  if (props.fxDirection == "row") {
    classes.fxColumn = false;
    classes.fxRow = true;
    classes.fxRowReverse = false;
    classes.fxColumnReverse = false;
  }

  if (props.fxReverse) {
    classes.fxColumn = false;
    classes.fxRow = false;
    classes['fxReverse-' + props.fxDirection] = true;  

    // if (context.props.column) {
    //   classes.fxRowReverse = false;
    //   classes.fxColumnReverse = true;
    // } else {
    //   classes.fxRowReverse = true;
    //   classes.fxColumnReverse = false;
    // }
  }

  classes['fxJustify-' + props.fxJustify] = true;
  classes['fxAlignItems-' + props.fxAlignItems] = true;
  classes['fxAlignContent-' + props.fxAlignContent] = true;

  return { styles, classes }
}



export default {
  name: 'fx-item',
  // extends: Item,
  functional: false,
  props: {
    tag: { default: 'div', type: String },

    // Flex Container Properies
    fxDirection: { default: "none", type: String, validator: type => Direction.indexOf(type) !== -1 },
    fxReverse: { default: false, type: Boolean },
    fxWrap: { default: false, type: Boolean },
    fxNoWrap: { default: true, type: Boolean },
    fxWrapReverse: { default: false, type: Boolean },
    fxJustify: { default: 'start', type: String, validator: type => JustifyContent.indexOf(type) !== -1 },
    fxAlignItems: { default: 'stretch', type: String, validator: type => AlignItems.indexOf(type) !== -1 },
    fxAlignContent: { default: 'stretch', type: String, validator: type => AlignContent.indexOf(type) !== -1 },
    fxGutter: { default: "none", type: String, validator: type => Gutter.indexOf(type) !== -1 },
    fxParentGutter: { default: "none", type: String, validator: type => Gutter.indexOf(type) !== -1 },
    fxParentDirection: { default: "none", type: String, validator: type => Direction.indexOf(type) !== -1 },

    // Flex Item Properies
    fxOrder: { default: 0, type: Number },
    fxFill: { default: false, type: Boolean },
    fxSize: { default: 0, type: Number | String },
    fxNoShrink: { default: false, type: Boolean },
    fxNoGrow: { default: false, type: Boolean },
    fxAlign: { default: 'none', type: String, validator: type => AlignSelf.indexOf(type) !== -1 },
  },
  render(createElement) {
    const context = this;

    const container = createContainerStyleClass(context.$props);
    const item = createItemStyleClass(context.$props);

    const myprops = {}

    myprops.style = { ...container.styles, ...item.styles };
    myprops.class = { ...container.classes, ...item.classes };

    //context.data.style = styles;
    //context.data.class = classes;

    if (context.$props.fxGutter != "none") {
      if(context.$slots.default != undefined) {
        console.log("PASS1")
        context.$slots.default.forEach(element => {
          console.log("PASS2")
          if(element.componentOptions != undefined && element.componentOptions.propsData != undefined) {
            console.log("PASS3",element.componentOptions)
            element.componentOptions.propsData.fxParentGutter = context.$props.fxGutter;
            element.componentOptions.propsData.fxParentDirection = context.$props.fxDirection;
          }
        });
      }
    }

    // console.log("GUTTER1", context.props.tag, context.props.gutter, context.data);
    // console.log("GUTTER2", context.props.tag, context.data.class['fxGutter-row-large']);

    // const size = calcSize(context, context.data);

    // context.data.style = { ...size, ...container.styles, ...item.styles };

    // //console.log("GUTTER2", context.props.tag, context.data.class);

    return createElement(context.$props.tag, { 
      class: Object.assign({}, myprops.class),
      style: Object.assign({}, myprops.style) 
    }, context.$slots.default);
  }
}
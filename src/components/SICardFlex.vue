<template>
  <fx-row class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'" fxNoShrink :fxNoGrow="fxNoGrow" :fxFill="fxFill" :fxParentGutter="fxParentGutter" :fxParentDirection="fxParentDirection">
    <fx-item class="el-card__header si-card__header" v-if="$slots.header || header" fxNoGrow>
      <slot name="header">{{ header }}</slot>
    </fx-item>
    <fx-row fxFill class="el-card__body si-card__body" :fxGutter="fxGutter" :style="bodyStyle">
      <slot/>
    </fx-row>
  </fx-row>
</template>

<script>
export default {
  name: "si-card-flex",
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    },
    fxNoGrow: { default: false, type: Boolean },
    fxFill: { default: false, type: Boolean },
    fxGutter: { default: "none", type: String },
    fxParentGutter: "",
    fxParentDirection: "",
  }
};
</script>

<style>
.si-card__header {
  padding: 0px;
  border-bottom: 0px;
}

.si-card__body {
  overflow: auto;
}
</style>
<template>
  <fx-row :fxFill="fxFill" :fxParentGutter="fxParentGutter" :fxParentDirection="fxParentDirection">
    <fx-col fxNoGrow fxAlignItems="center">
      <fx-item :fxSize="labelPosition == 'left' || $slots['header-left'] ? 10 : 0">
        <div class="el-divider el-divider--horizontal" />
      </fx-item>

      <fx-item v-if="labelPosition != 'left' && condensedLeft && $slots['header-left']">
        <div class="el-divider el-divider--horizontal" />
      </fx-item>

      <fx-col fxNoGrow fxNoShrink v-if="$slots['header-left']" class="si-divider-card__button">
        <slot name="header-left" />
      </fx-col>

      <fx-item v-if="labelPosition != 'left' && !condensedLeft && $slots['header-left']">
        <div class="el-divider el-divider--horizontal" />
      </fx-item>

      <fx-item class="si-divider-card__title" fxNoGrow v-if="header" name="title">{{header}}</fx-item>

      <fx-item v-if="labelPosition != 'right' && !condensedRight && $slots['header-right']">
        <div class="el-divider el-divider--horizontal" />
      </fx-item>

      <fx-col fxNoGrow fxNoShrink v-if="$slots['header-right']" class="si-divider-card__button">
        <slot name="header-right" />
      </fx-col>

      <fx-item v-if="labelPosition != 'right' && condensedRight && $slots['header-right']">
        <div class="el-divider el-divider--horizontal" />
      </fx-item>

      <fx-item :fxSize="labelPosition == 'right' || $slots['header-right'] ? 10 : 0">
        <div class="el-divider el-divider--horizontal" />
      </fx-item>
    </fx-col>
    <fx-row fxFill :fxGutter="fxGutter">
      <slot />
    </fx-row>
  </fx-row>
</template>

<script>
export default {
  name: "si-divider-card",
  props: {
    header: { default: "", type: String },
    labelPosition: { default: "left", type: String },
    condensedLeft: { default: false, type: Boolean },
    condensedRight: { default: false, type: Boolean },
    fxNoGrow: { default: false, type: Boolean },
    fxFill: { default: false, type: Boolean },
    fxGutter: { default: "none", type: String },
    fxParentGutter: "",
    fxParentDirection: "",
  }
};
</script>

<style lang="scss">
.si-divider-card__title {
  padding: 0 5px;
  font-size: 18px;
  font-weight: 600;
}

.si-divider-card__button {
  padding: 0 5px;
}

.si-divider-card__title .el-checkbox__label {
  font-size: 18px;
  font-weight: 600;
  color: #303133;
}

.si-divider-card__title .el-checkbox__inner {
  /* border: 1px solid black; */
  border-color: #303133;
}
</style>
<template>
  <fx-row :fxFill="fxFill">
    <fx-col fxNoGrow fxAlignItems="center">
      <fx-item :fxSize="labelPosition == 'left' || $slots.headerLeft ? 30 : 0" name="left">
        <div class="el-divider el-divider--horizontal" />
      </fx-item>

      <fx-col fxNoGrow fxNoShrink v-if="$slots.headerLeft" class="si-divider-card__button" name="header-left-text">
        <slot name="headerLeft" />
      </fx-col>
      <fx-item :fxSize="labelPosition == 'left' ? 30 : 0" v-if="$slots.headerLeft"  name="header-left">
        <div class="el-divider el-divider--horizontal" />
      </fx-item>

      <fx-item class="si-divider-card__title" fxNoGrow name="title">{{header}}</fx-item>

      <fx-item :fxSize="labelPosition == 'right' ? 30 : 0" v-if="$slots.headerRight" name="header-right">
        <div class="el-divider el-divider--horizontal" />
      </fx-item>
      <fx-col fxNoGrow fxNoShrink v-if="$slots.headerRight" class="si-divider-card__button" name="header-right-text">
        <slot name="headerRight" />
      </fx-col>

      <fx-item :fxSize="labelPosition == 'right' || $slots.headerRight ? 30 : 0" name="right">
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
  padding: 0 15px;
  font-size: 18px;
  font-weight: 600;
}

.si-divider-card__button {
  padding: 0 15px;
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
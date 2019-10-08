<template>
  <div class="si-divider-card">
    <div class="si-divider-card__header">
      <el-divider :content-position="labelPosition">
        <div class="si-divider-card__title" v-if="$slots.header || title">
          <slot name="header">
            <div class="si-divider-card__title">{{title}}</div>
          </slot>
        </div>
      </el-divider>
    </div>
    <div class="si-divider-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "si-divider-card",
  props: {
    title: { default: "", type: String },
    labelPosition: { default: "left", type: String }
  }
};
</script>

<style>
.si-divider-card {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
}
.si-divider-card__title {
  font-size: 18px;
  font-weight: 600;
}
.si-divider-card__header {
  display: flex;
  flex: 0 0 auto;
}
.si-divider-card__body {
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
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
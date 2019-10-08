<template>
  <div class="si-divider-card">
    <div class="si-divider-card__header">
      <el-divider :content-position="labelPosition">
        <div class="si-divider-card__title">{{title}}</div>
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
</style>
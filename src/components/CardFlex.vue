<template>
  <div
    class="el-card si-flex-column"
    :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'"
  >
    <div class="el-card__header si-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="el-card__body si-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "si-card-flex",
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  }
};
</script>

<style>
.si-flex-column {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
}

.si-card__header {
  flex: 0 0 auto;
  padding: 0px;
  border-bottom: 0px;
}

.si-card__body {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
}
</style>
<template>
  <si-card-flex>
    <div slot="header" class="si-basic-card__header">
      <span class="si-basic-card__title">
        <slot name="title"></slot>
        {{title}}
      </span>
    </div>
    <slot></slot>
  </si-card-flex>
</template>

<script>
export default {
    name: "si-basic-card",
    props: {
        title: { default: '', type: String }
    }
}
</script>

<style>
.si-basic-card__header {
  background-color: #427aa1;
  height: 100%;
  flex: 1 1 auto;
  display: flex;
}

.si-basic-card__title {
  height: 100%;
  color: white;
  font-size: 20px;
  margin: 3px 0px 3px 10px;
  height: 30px;
}
</style>
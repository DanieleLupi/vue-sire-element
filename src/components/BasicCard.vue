<template>
  <si-card-flex :fxNoGrow="!fxGrow" :fxFill="fxFill" :header="header" :fxParentGutter="fxParentGutter" :fxParentDirection="fxParentDirection">
    <fx-col slot="header" class="si-basic-card__header" fxGutter="small">
      <fx-item fxNoGrow fxAlign="center" class="si-basic-card__button">
        <slot name="header-left"></slot>
      </fx-item>
      <fx-item>
        <slot name="header-title">
          <span class="si-basic-card__title">
            <slot name="title">{{header}}</slot>
          </span>
        </slot>
      </fx-item>
      <fx-item fxNoGrow fxAlign="center" class="si-basic-card__button">
        <slot name="header-right"></slot>
      </fx-item>
    </fx-col>
    <fx-row fxFill>
      <slot/>
    </fx-row>
  </si-card-flex>
</template>

<script>
export default {
  name: "si-basic-card",
  props: {
    header: { default: "", type: String },
    fxFill: { default: false, type: Boolean },
    fxGrow: { default: false, type: Boolean },
    fxParentGutter: "",
    fxParentDirection: "",
  }
};
</script>

<style>
.si-basic-card__header {
  background-color: #427aa1;
}

.si-basic-card__button {
  padding: 0px 15px;
}

.si-basic-card__title {
  /* height: 100%; */
  color: white;
  font-size: 20px;
  margin: 3px 0px 3px 3px;
  height: 30px;
}
</style>
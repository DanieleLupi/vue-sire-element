<template>
  <si-card-flex :header="header" :fxNoGrow="fxNoGrow" :fxFill="fxFill" :fxParentGutter="fxParentGutter" :fxParentDirection="fxParentDirection">
    <fx-col slot="header" class="si-detail-card__header">
      <fx-item>
        <span class="si-detail-card__title">
          <slot name="title">{{header}}</slot>
        </span>
      </fx-item>
      <fx-col class="si-detail-card__button" fxAlign="center" :fxSize="330">
        <el-button
          type="primary"
          style="width:100px"
          @click="buttonClick(1)"
          :disabled="!allowSave"
        >Salva</el-button>
        <el-button
          type="warning"
          style="width:100px"
          @click="buttonClick(2)"
          :disabled="!allowCancel"
        >Annulla</el-button>
        <el-button
          type="danger"
          style="width:100px"
          @click="buttonClick(3)"
          :disabled="!allowDelete"
        >Elimina</el-button>
      </fx-col>
    </fx-col>
    <fx-row fxFill :fxGutter="fxGutter">
      <slot/>
    </fx-row>
  </si-card-flex>
</template>

<style>
.si-detail-card__header {
  background-color: #ebf2fa;
}

.si-detail-card__title {
  height: 48px;
  font-size: 20px;
  font-size: xx-large;
  margin: 10px 0px 10px 20px;
}

.si-detail-card__button {
  padding: 0px 15px;
}
</style>

<script>
export default {
  props: {
    header: {
      default: "",
      type: String
    },
    allowSave: {
      default: true,
      type: Boolean
    },
    allowCancel: {
      default: true,
      type: Boolean
    },
    allowDelete: {
      default: true,
      type: Boolean
    },
    fxNoGrow: { default: false, type: Boolean },
    fxFill: { default: false, type: Boolean },
    fxGutter: { default: "none", type: String },
    fxParentGutter: "",
    fxParentDirection: "",
  },
  methods: {
    buttonClick: function(type) {
      if (type === 1) {
        this.$emit("save");
      } else if (type === 2) {
        this.$emit("cancel");
      } else if (type === 3) {
        this.$emit("delete");
      }
    }
  }
};
</script>
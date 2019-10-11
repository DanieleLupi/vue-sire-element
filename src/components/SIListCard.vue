<template>
  <si-card-flex :header="header" :fxNoGrow="fxNoGrow" :fxFill="fxFill" :fxGutter="fxGutter" :fxParentGutter="fxParentGutter" :fxParentDirection="fxParentDirection">
    <fx-col slot="header" class="si-list-card__header">
      <fx-item>
        <span class="si-list-card__title">
          <slot name="title">{{header}}</slot>
        </span>
      </fx-item>
      <fx-col class="si-list-card__button" fxAlign="center" :fxSize="330">
        <el-button
          type="primary"
          style="width:100px"
          @click="buttonClick(1)"
          :disabled="!allowInsert"
        >Inserisci</el-button>
        <el-button
          type="warning"
          style="width:100px"
          @click="buttonClick(2)"
          :disabled="!allowUpdate"
        >Modifica</el-button>
        <el-button
          type="danger"
          style="width:100px"
          @click="buttonClick(3)"
          :disabled="!allowDelete"
        >Elimina</el-button>
      </fx-col>
    </fx-col>
    <slot/>
  </si-card-flex>
</template>

<style>
.si-list-card__header {
  background-color: #ebf2fa;
}

.si-list-card__title {
  height: 48px;
  font-size: 20px;
  font-size: xx-large;
  margin: 10px 0px 10px 20px;
}

.si-list-card__button {
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



    allowInsert: {
      default: true,
      type: Boolean
    },
    allowUpdate: {
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
        this.$emit("insert");
      } else if (type === 2) {
        this.$emit("update");
      } else if (type === 3) {
        this.$emit("delete");
      }
    }
  }
};
</script>
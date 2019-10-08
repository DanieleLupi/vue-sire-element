<template>
  <si-card-flex>
    <div slot="header" class="si-detail-card__header">
      <fx-item>
        <span class="si-detail-card__title">
          {{title}}
          <slot name="title"></slot>
        </span>
      </fx-item>
      <div class="si-detail-card__button">
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
      </div>
    </div>
    <slot></slot>
  </si-card-flex>
</template>

<style>
.si-detail-card__header {
  background-color: #ebf2fa;
  height: 100%;
  flex: 1 1 auto;
  display: flex;
}

.si-detail-card__title {
  height: 48px;
  font-size: 20px;
  font-size: xx-large;
  margin: 10px 0px 10px 20px;
}

.si-detail-card__button {
  /* float: right; */
  flex: 0 0 330px;
  align-self: center;
}
</style>

<script>
export default {
  props: {
    title: {
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
    }
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
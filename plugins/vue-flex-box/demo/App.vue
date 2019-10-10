<template>
    <div id="app" style="height: 100%;" >
        <fx-col fxFill v-bind:class="classe ? 'pippo': 'paperino'" style="border: 1px solid red" fxGutter="large" fxWrap>
            <fx-item fxFill style="border: 1px solid yellow" fxSize="50%">
                Pippo 1
            </fx-item>
            <fx-item fxFill style="border: 1px solid blue" fxSize="50%">
                Pippo 2
            </fx-item>
            <fx-item fxFill style="border: 1px solid black">
                Pippo 3
            </fx-item>
        </fx-col>
    </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
      return {
          classe: true
      }
  }
};
</script>

<style>
html,
body {
  font-family: "Open Sans", sans-serif;
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
}
.pippo {
    background-color: green;
}

.paperino {
    background-color: red;
}
</style>
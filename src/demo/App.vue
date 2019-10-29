<template>
  <div id="app" style="height: 800px; width: 1600px">
    <fx-col fxFill fxGutter="large">
      <fx-row fxFill fxGutter="large">
        <si-card-flex header="Pippo" fxGutter="small"></si-card-flex>
        <si-detail-card header="Orario ufficio" fxGutter="large" fxFill>
          <fx-item>Pippo1</fx-item>
          <fx-item>Pippo2</fx-item>
        </si-detail-card>
      </fx-row>
      <fx-row fxFill fxGutter="large">
        <si-list-card header="Lista" fxGutter="small"></si-list-card>
        <si-detail-card header="Dettaglio" fxGutter="large">
          <si-basic-card header="BCard" name="Sub1">
            <div slot="header-left">SINISTRA</div>
            <div slot="header-right">DESTRA</div>
            <div>BODY BASIC CARD</div>
          </si-basic-card>
          <si-basic-card header="BCard" name="Sub1" labelPosition="center">
            <div slot="header-left">SINISTRA</div>
            <div slot="header-right">DESTRA</div>
            <div>BODY BASIC CARD</div>
          </si-basic-card>
          <si-basic-card header="BCard" name="Sub1" labelPosition="right">
            <div slot="header-left">SINISTRA</div>
            <div slot="header-right">DESTRA</div>
            <div>BODY BASIC CARD</div>
          </si-basic-card>
          <fx-col fxGutter="large">
            <si-divider-card header="Ciao1">
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>

            <si-divider-card header="Ciao1" labelPosition="center">
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>

            <si-divider-card header="Ciao1" labelPosition="right">
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>

            <!-- <si-divider-card header="Ciao2">
              <div slot="header-left">SINISTRA</div>
              <div slot="header-right">DESTRA</div>
            </si-divider-card> -->

            <!-- <si-divider-card>
              <div slot="header-left">SINISTRA</div>
              <div slot="header-right">DESTRA</div>
            </si-divider-card> -->

          </fx-col>
          <fx-col fxGutter="large">
            <si-divider-card header="Ciao1" >
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>

            <si-divider-card header="Ciao1" labelPosition="center" condensedLeft>
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>

            <si-divider-card header="Ciao1" labelPosition="right">
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>
          </fx-col>
          <fx-col fxGutter="large">
            <si-divider-card header="Ciao1">
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>

            <si-divider-card header="Ciao1" labelPosition="center" condensedRight>
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>

            <si-divider-card header="Ciao1" labelPosition="right">
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>
          </fx-col>
          <fx-col fxGutter="large">
            <si-divider-card header="Ciao1" condensedLeft>
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>

            <si-divider-card header="Ciao1" labelPosition="center" condensedLeft condensedRight>
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>

            <si-divider-card header="Ciao1" labelPosition="right">
              <div slot="header-left">S</div>
              <div slot="header-right">D</div>
            </si-divider-card>
          </fx-col>
          <!-- <fx-col fxFill>
            <si-tabs-flex tab-position="top">
              <el-tab-pane label="Primo">
                Primo BODY
              </el-tab-pane>
              <el-tab-pane label="Secondo">
                Secondo BODY
              </el-tab-pane>
            </si-tabs-flex>
          </fx-col> -->
        </si-detail-card>
      </fx-row>
    </fx-col>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
html,
body {
  font-family: "Open Sans", sans-serif;
  padding: 20px;
  margin: 0px;
  height: 100%;
  width: 100%;
}
</style>
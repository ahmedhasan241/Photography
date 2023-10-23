<template>
  <v-container>
    <v-footer
      class="v-footer text-center d-flex flex-column text-grey-darken-1"
    >
      <div class="v-card-text">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 v-btn"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>

      <div class="pt-0 mb-6">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </div>
      <v-divider inset></v-divider>

      <div>
        {{ new Date().getFullYear() }} —
        <strong> Photography Vuetify Project</strong>
      </div>
    </v-footer>
  </v-container>
</template>
<script setup>
const icons = ref([
  "mdi-facebook",
  "mdi-instagram",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-youtube",
]);
</script>

<style lang="scss" scoped>
.v-footer {
  background: white !important;

  .v-card-text {
    @media only screen and (max-width: 599px) {
      padding: 16px 0;
    }

    .v-btn {
      @media only screen and (max-width: 599px) {
        margin: 0 7px !important;
      }
    }
  }
}
</style>

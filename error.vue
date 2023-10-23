<template>
  <v-content>
    <v-container>
      <div class="block text-center notFound">
        <h2>Page not found</h2>
        <i class="fas fa-exclamation-triangle red--text"></i>
        <p>
          <strong>{{ error.message }}</strong>
        </p>
        <p>It looks like something broke.</p>
        <p>Sorry about that.</p>
      </div>
    </v-container>
  </v-content>
</template>

<script setup>
const error = useError();
</script>

<style lang="scss" scoped>
.block {
  padding: 60px 0;
  border-bottom: 1px solid darken(white, 10%);

  @media only screen and (max-width: 599px) {
    padding: 20px 0;
  }

  h2 {
    font-size: 30px;
    padding: 0 0 10px;
    margin: 0 0 40px;
    position: relative;

    @media only screen and (max-width: 599px) {
      font-size: 24px;
      padding: 0 0 5px;
      margin: 0 0 25px;
    }
  }
}
.notFound .fas {
  font-size: 40px;
  margin: 0 0 40px;
}
</style>

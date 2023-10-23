<template>
  <v-carousel cycle hide-delimiters class="carousel">
    <v-carousel-item
      v-for="(item, i) in items"
      cover
      :key="i"
      :src="item.imageSrc"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const items = ref([
  {
    imageSrc: new URL(`~/assets/images/img-carousel1.jpg`, import.meta.url)
      .href,
  },
  {
    imageSrc: new URL(`~/assets/images/img-carousel2.jpg`, import.meta.url)
      .href,
  },
  {
    imageSrc: new URL(`~/assets/images/img-carousel3.jpg`, import.meta.url)
      .href,
  },
]);
</script>

<style lang="scss" scoped>
.carousel {
  height: 50dvh;
  @media (max-width: 599px) {
    height: 220px !important;
  }
}
</style>

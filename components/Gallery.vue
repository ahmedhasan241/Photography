<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Gallery</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6"
          sm="4"
        >
          <v-img
            :src="item.src"
            aspect-ratio="1"
            :lazy-src="item.src"
            cover
            class="bg-grey-lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const items = ref([
  {
    id: 1,
    src: new URL(`../assets/images/img1.jpg`, import.meta.url).href,
  },
  {
    id: 2,
    src: new URL(`../assets/images/img2.jpg`, import.meta.url).href,
  },
  {
    id: 3,
    src: new URL(`../assets/images/img3.jpg`, import.meta.url).href,
  },
  {
    id: 4,
    src: new URL(`../assets/images/img4.jpg`, import.meta.url).href,
  },
  {
    id: 5,
    src: new URL(`../assets/images/img5.jpg`, import.meta.url).href,
  },
  {
    id: 6,
    src: new URL(`../assets/images/img6.jpg`, import.meta.url).href,
  },
  {
    id: 7,
    src: new URL(`../assets/images/img7.jpg`, import.meta.url).href,
  },
  {
    id: 8,
    src: new URL(`../assets/images/img8.jpg`, import.meta.url).href,
  },
  {
    id: 9,
    src: new URL(`../assets/images/img9.jpg`, import.meta.url).href,
  },
]);
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

    &:after {
      content: "";
      background: black;
      width: 60px;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      @media only screen and (max-width: 599px) {
        width: 30px;
      }
    }
  }
}
</style>

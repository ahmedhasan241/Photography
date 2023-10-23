<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Latest Post</h2>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="align-end text-white"
              height="200"
              :src="item.src"
              cover
            >
              <v-card-title class="v-card-title text-body-1">{{
                item.title
              }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4"> {{ item.subtitle }}</v-card-subtitle>

            <v-card-text>
              <div>{{ item.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const show = ref(false);
const items = ref([
  {
    id: 1,
    title: "Top western road trips",
    subtitle: "1,000 miles of wonder",
    description:
      "Embark on a scenic journey through the American West, with breathtaking landscapes and historic landmarks. A road trip to remember",
    src: new URL(`../assets/images/img10.jpg`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Christmas tales to read",
    subtitle: "2,000 miles of wonder",
    description:
      "Spread joy and cheer this holiday season with festive decor, warm gatherings, and meaningful gifts. Make memories to cherish forever.",
    src: new URL(`../assets/images/img11.jpg`, import.meta.url).href,
  },
  {
    id: 3,
    title: "20 movies not to miss in 2020",
    subtitle: "3,000 miles of wonder",
    description:
      "Escape reality and immerse yourself in a world of imagination through the magic of movies. Discover new stories, emotions, and adventures.",
    src: new URL(`../assets/images/img12.jpg`, import.meta.url).href,
  },
]);
</script>

<style lang="scss" scoped>
.latestPostBlock {
  background: darken(white, 2%);

  .v-card-title {
    background: rgba(0, 0, 0, 0.4);
  }
}
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

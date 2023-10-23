<template>
  <v-content>
    <v-card class="staticHero">
      <v-img
        class="background-img align-end text-white"
        :src="imagGround"
        cover
      >
        <v-card-title class="v-card-title">
          <v-container>About Us</v-container></v-card-title
        >
      </v-img>
    </v-card>
    <div class="block">
      <v-container>
        <p>
          Photography is an art form that allows us to express our creativity
          and preserve memories for generations to come. It's a way to capture
          the world around us, from the grand landscapes to the small details,
          and to tell a story through a single image. Whether you're a
          professional photographer or just starting out, the journey of
          improving your craft is always exciting. You can experiment with
          different lighting, compositions, and techniques to create unique and
          visually stunning images. Additionally, photography allows us to
          document the world, capture social and political issues, and raise
          awareness about important causes. So grab your camera, go out and
          explore, and let your creativity run free.
        </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Teams</h2>
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.id"
            class="d-flex child-flex"
            cols="12"
            sm="4"
          >
            <v-card
              flat
              tile
              class="mx-auto mt-6 text-center"
              style="width: 100%"
            >
              <v-img
                :src="item.src"
                aspect-ratio="1"
                class="grey lighten-2 v-responsive"
              ></v-img>

              <v-card-title class="mt-4"> {{ item.name }}</v-card-title>

              <v-card-subtitle> {{ item.title }} </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script setup>
const imagGround = ref(
  new URL(`../assets/images/img13.jpg`, import.meta.url).href
);
const items = ref([
  {
    id: 1,
    src: new URL(`../assets/images/team1.jpg`, import.meta.url).href,
    name: "Peter Smith",
    title: "Director",
  },
  {
    id: 2,
    src: new URL(`../assets/images/team2.jpg`, import.meta.url).href,
    name: "Roy Perry",
    title: "Photographer",
  },
  {
    id: 3,
    src: new URL(`../assets/images/team3.jpg`, import.meta.url).href,
    name: "Lisa White",
    title: "Freelancer",
  },
]);
</script>

<style lang="scss" scoped>
.v-card-title {
  @media only screen and (max-width: 767px) {
    font-size: 20px !important;
    height: 10vh;
  }
}
.background-img {
  height: 100%;
  @media only screen and (max-width: 767px) {
    height: 100%;
    width: 100% !important;
  }
}
.staticHero {
  height: 350px;
  @media only screen and (max-width: 767px) {
    height: 200px;
  }
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
</style>

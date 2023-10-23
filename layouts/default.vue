<template>
  <v-app>
    <v-app-bar>
      <v-container>
        <v-toolbar class="bg-white" density="compact" title="Photography">
          <v-toolbar-items class="d-none d-sm-flex">
            <NuxtLink to="/">
              <v-btn
                class="text-grey-lighten-1 h-100"
                variant="text"
                text="HOME"
              ></v-btn
            ></NuxtLink>
            <NuxtLink to="/about">
              <v-btn
                class="text-grey-lighten-1 h-100"
                variant="text"
                text="About"
              ></v-btn
            ></NuxtLink>
            <NuxtLink to="/contact">
              <v-btn
                class="text-grey-lighten-1 h-100"
                variant="text"
                text="CONTACT"
              ></v-btn
            ></NuxtLink>
          </v-toolbar-items>
          <div class="text-center d-flex d-sm-none">
            <v-menu>
              <template v-slot:activator="{ props: menu }">
                <v-tooltip location="top">
                  <template v-slot:activator="{ props: tooltip }">
                    <v-app-bar-nav-icon
                      v-bind="mergeProps(menu, tooltip)"
                    ></v-app-bar-nav-icon>
                  </template>
                  <span>I'm A Tooltip</span>
                </v-tooltip>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title
                    ><NuxtLink class="text-decoration-none text-gray" to="/"
                      >Home</NuxtLink
                    ></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><NuxtLink
                      class="text-decoration-none text-gray"
                      to="/about"
                      >About</NuxtLink
                    ></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><NuxtLink
                      class="text-decoration-none text-gray"
                      to="/contact"
                      >Contact</NuxtLink
                    ></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-toolbar>
      </v-container>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { mergeProps } from "vue";

export default {
  data: () => ({
    items: [
      { title: "Click Me1" },
      { title: "Click Me2" },
      { title: "Click Me3" },
      { title: "Click Me4" },
    ],
  }),
  methods: {
    mergeProps,
  },
};
</script>

<style lang="scss" scoped></style>

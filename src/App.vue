<template>
  <div id="app">
    <AppMenu></AppMenu>
    <AppHeader></AppHeader>
    <AppSeries></AppSeries>
    <AppFooter></AppFooter>
    <router-view />
  </div>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
import AppHeader from "./components/AppHeader.vue";
import AppSeries from "./components/AppSeries.vue";
import AppFooter from "./components/AppFooter.vue";





export default {
  name: "App",
  components: {
    AppMenu,
    AppHeader,
    AppSeries,
    AppFooter,

  },
};
</script>

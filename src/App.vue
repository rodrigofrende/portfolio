<template>
  <div
    class="
      container
      mx-auto
      h-full
      p-10
      rounded-lg
      transition-all
      duration-500
      bg-blue-light
      dark:bg-blue-dark
    "
  >
    <Header @changeView="switchView" />
    <Home v-if="showHome" />
    <About v-if="showAbout" />
    <router-link class="" to="/"></router-link>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";

export default {
  components: {
    Header,
    Home,
    About,
  },
  data() {
    return {
      showHome: true,
      showAbout: false,
    };
  },
  methods: {
    mainHome() {
      this.showHome = true;
    },
    mainAbout() {
      this.showAbout = true;
    },
    switchView(route) {
      (this.showHome = false), (this.showAbout = false);

      switch (route) {
        case "home":
          this.mainHome();
          break;
        case "about":
          this.mainAbout();
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.h-full {
  min-height: 100vh;
}
</style>

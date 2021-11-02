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
      bg-white
      dark:bg-blue-dark
    "
  >
    <Header ref="header" @changeView="switchView" />
    <Home @changeView="switchView" v-if="showHome" />
    <Projects @changeView="switchView" v-if="showProjects" />
    <About v-if="showAbout" />
    <router-link class="" to="/"></router-link>
    <notifications position="center bottom" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default {
  components: {
    Header,
    Home,
    About,
    Projects,
  },
  data() {
    return {
      showHome: true,
      showAbout: false,
      showProjects: false,
    };
  },
  watch: {
    showAbout(val) {
      if (val) {
        this.$refs.header.activeMenu = "about";
      }
    },
  },
  methods: {
    mainHome() {
      this.showHome = true;
    },
    mainAbout() {
      this.showAbout = true;
    },
    mainProjects() {
      this.showProjects = true;
    },
    switchView(route) {
        (this.showHome = false),
        (this.showAbout = false),
        (this.showProjects = false);

      switch (route) {
        case "home":
          this.mainHome();
          break;
        case "about":
          this.mainAbout();
          break;
        case "projects":
          this.mainProjects();
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

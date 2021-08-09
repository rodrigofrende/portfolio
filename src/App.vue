<template>
  <div
    class="
      container
      mx-auto
      h-screen
      p-10
      rounded-lg
      transition-all
      duration-500
      bg-blue-light
      dark:bg-blue-dark
    "
  >
    <Header :themeText="themeText"/>
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <h1 class="text-yellow-400 flex justify-center">R F</h1>
        <button
          class="
            font-bold
            bg-blue-light
            text-black
            border-2
            px-4
            py-2
            justify-center
            rounded-xl
            hover:
            dark:bg-blue-dark dark:text-white
          "
          @click="toggleTheme"
          type="button"
        >
          {{ themeText }}
        </button>
      </div>
    </div>
    <router-link class="" to="/"></router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
    themeText() {
      if (this.theme === "light") {
        return "Shine on you";
      } else {
        return "Getting Dark";
      }
    },
  },
  mounted() {
    this.$store.dispatch("initTheme");
  },
  watch: {
    theme(newTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
  methods: {
    switchDarkMode() {
      this.darkMode = !this.darkMode;
    },
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="p-14 bg-white dark:bg-black">
    <h1 class=" text-yellow-400 flex justify-center">R F</h1>
    <button class="text-white-300 bg-gray-300 px-4 py-2 flex justify-center rounded-xl hover:opacity-90 dark:bg-blue-400 " @click="toggleTheme" type="button">{{themeText}}</button>
    <router-link class="  " to="/"></router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
    themeText () {
      if (this.theme === 'light') {
        return  'Shine on you'
      } else {
        return 'Getting Dark'
      }
    }
  },
  mounted () {
    this.$store.dispatch('initTheme')
  },
  watch: {
    theme(newTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
  methods: {
    switchDarkMode () {
      this.darkMode = !this.darkMode
    },
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    }
  }
}
</script>

<style>
</style>

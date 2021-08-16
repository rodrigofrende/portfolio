<template>
  <nav
    class="
      flex
      items-center
      rounded-2xl
      justify-between
      flex-wrap
      bg-header-bar
      dark:bg-header-bar-dark
      p-4
    "
  >
    <div
      class="flex items-center flex-shrink-0 text-black mr-6 dark:text-white"
    >
      <img
        v-if="theme === 'light'"
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        src="@/assets/settings_ethernet_black_48dp.svg"
      />
      <img
        v-else
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        src="@/assets/settings_ethernet_white_48dp.svg"
      />
      <span class="font-semibold text-xl tracking-tight mr-5">RF Dev</span>
    </div>
    <div class="block lg:hidden">
      <button
        @click="toggleMenu"
        class="
          flex
          items-center
          px-3
          py-2
          border
          rounded
          text-teal-200
          border-teal-400
          hover:text-white hover:border-white
        "
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="
        w-full
        text-center
        block
        flex-grow
        lg:flex lg:items-center lg:w-auto lg:text-left
      "
      :class="menuOpen ? 'block' : 'hidden'"
    >
      <div class="lg:flex-grow">
        <a
          href="#"
          class="block mt-4 nav-link lg:inline-block lg:mt-0 text-teal-200 mr-4"
          :class="activeMenu === 'home' ? 'active' : ''"
          @click="showHome"
        >
          Home
        </a>
        <a
          href="#"
          class="block mt-4 nav-link lg:inline-block lg:mt-0 text-teal-200 mr-4"
          :class="activeMenu === 'projects' ? 'active' : ''"
          @click="showProjects"
        >
          Projects
        </a>
        <a
          href="#"
          class="block mt-4 nav-link lg:inline-block lg:mt-0 text-teal-200"
          :class="activeMenu === 'about' ? 'active' : ''"
          @click="showAbout"
        >
          About me
        </a>
      </div>
      <div class="flex justify-center">
        <button
          class="
            inline-block
            mx-3
            leading-none
            nav-link
            border
            rounded
            mt-4
            lg:mt-0
          "
          @click="downloadCV"
        >
          I just want your CV
        </button>
        <img
          v-if="theme === 'light'"
          @click="toggleTheme"
          class="inline-block px-2 py-1 nav-link border rounded mt-4 lg:mt-0"
          width="41"
          height="41"
          src="@/assets/moon.png"
        />
        <img
          v-else
          @click="toggleTheme"
          class="
            inline-block
            px-2
            py-1
            leading-none
            nav-link
            border
            rounded
            mt-4
            lg:mt-0
          "
          width="41"
          height="41"
          src="@/assets/sun.png"
        />
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menuOpen: false,
      activeMenu: "home",
    };
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
    themeText() {
      if (this.theme === "light") {
        return "Dark Mode";
      } else {
        return "Light Mode";
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
    downloadCV() {
      window.open(
        "https://drive.google.com/file/d/1jpdkSmoPMGFUPvkiofOq3JQo8GcGiOIo/view"
      );
    },
    showHome() {
      this.activeMenu = "home";
      this.$emit("changeView", "home");
    },
    showProjects() {
      this.activeMenu = "projects";
      this.$emit("changeView", "projects");
    },
    showAbout() {
      this.activeMenu = "about";
      this.$emit("changeView", "about");
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    switchDarkMode() {
      this.darkMode = !this.darkMode;
    },
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>

<style scoped>
button {
  background-color: transparent !important;
}
</style>

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
    <Header />
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <h1 class="text-yellow-400 flex justify-center">R F</h1>
        <button class="" type="button">Button</button>
      </div>
    </div>
    <router-link class="" to="/"></router-link>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>

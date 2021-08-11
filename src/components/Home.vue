<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12 text-center">
      <label
        class="
          flex
          pt-16
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-bold
          title
          justify-center
          text-blue-text
          dark:text-orange-dark
          text-transform
          animate__animated animate__fadeInLeft animate__slow
        "
        >Rodrigo Frende</label
      >
      <label
        class="
          flex
          text-black
          dark:text-white
          cursive-subtitle
          pt-8
          pb-12
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-medium
          justify-center
          text-transform
          animate__animated animate__fadeIn animate__delay-1s animate__slow
        "
        >Front End Developer</label
      >
      <button
        class="animate__animated animate__fadeIn animate__delay-2s"
        type="button"
      >
        Let's start!
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Style+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
.title {
  font-family: "Abril Fatface", cursive;
  letter-spacing: 5px;
}
.cursive-subtitle {
  font-family: "Style Script", cursive;
}
</style>

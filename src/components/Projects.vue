<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12 items-center text-center">
      <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-10">
        <div v-for="project in projects" :key="project.id" :class="calculateDelay(project.id)"
        class="
          dark: bg-header-bar-dark
          dark: text-white
          project-container
          animate__animated
          animate__rotateInDownLeft"
        >
          <h3 class="p-4">{{project.name}}</h3>
          <p class="p-2">{{project.description}}</p>
          <img :src="project.image" :alt="project.name">
          <p class="py-5"><a class="text-blue-light hover:underline" :href="project.url" target="_blank"> {{project.url.replace('https://', '')}}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: 'Poke-Project', description: 'Using Vue js, pokeapi, bootstrap vue and firebase This application collects information with the use and shows the favorite pokemons of the trainers 💥', image: require('@/assets/projects/pokeproject.png'), url: 'https://pokeproject.netlify.app/'},
        { id: 2, name: 'React Beer Market', description: 'Using React js, i build a simple e-commerce example with an interactive cart using a beer API 🍺', image: require('@/assets/projects/beermarket.png'), url: 'https://reactbeermarket.netlify.app/'},
        { id: 3, name: 'Halloween Demo', description: 'With vanilla js, html and css i create this simple full responsive demo website, inspired in halloween 🎃', image: require('@/assets/projects/halloween.png'), url: 'https://halloween-website-demo.netlify.app/'},
        // { id: 4, name: 'Poke-Project', description: 'lorem ipsum ersene etsium dom sera fagiat', image: require('@/assets/projects/pokeproject.png'), url: 'www.pokeproject.netlify.app'}
      ]
    };
  },
  methods: {
    calculateDelay(time) {
      return 'animate__delay-' +time +'s'
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Style+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
.project-container {
  border-radius: 20px;
  min-height: 300px;
  box-shadow: 4px 5px 5px 1px rgb(0 0 0 / 40%)
}
</style>

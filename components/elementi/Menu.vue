<template>
  <div>
    <p class="text-red-900 font-semibold">{{ genereScelto.name }}</p>
    <div class="gap-8 grid grid-cols-6 bg-red-500 border border-blue-700">
      <ElementiCard v-for="movie of elenco.results.slice(0, 6)" 
        :key="movie.id" :film="movie" />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  genereScelto: {
    type: Object // azione | animazione | avventura
  }
})
const { data: elenco } = 
await useApi('https://api.themoviedb.org/3/discover/movie?with_genres='+ props.genereScelto.id)

</script>

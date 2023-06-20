
<script setup>
const filmPerGenere = ref()
// primo liv
const { data: elenco } = await useApi('https://api.themoviedb.org/3/discover/movie')
const { data: generi } = await useApi('https://api.themoviedb.org/3/genre/movie/list')

</script>

<template>
  <ElementiInput @filtraElemento="Filtra" />
  <div class="gap-8 grid grid-cols-6 bg-red-500 border border-blue-700">
    <ElementiCard 
    v-for="movie of elenco.results.slice(0, 6)" 
    :key="movie.id" 
    :film="movie" :generi="generi.genres" />
  </div>

  <!-- <ElementiMenu v-for="genere of generi.genres" 
    :key="genere.id" :genereScelto="genere" /> -->
 
</template>
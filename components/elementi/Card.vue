<template>
  <div class="">
    <img :src=" 'https://image.tmdb.org/t/p/original' + film.poster_path " :alt="film.title">
    <p class="text-2xl font-extrabold">  
      {{ film.original_title }}
    </p>
    <p class=" truncate text-ellipsis  ">
      {{ film.overview }}
    </p>
    <div>
      {{ film.vote_average }}/10
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  film: {
    type: Object
  }
})
</script>
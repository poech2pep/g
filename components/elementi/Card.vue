<template>
  <div class="">
    <img :src=" 'https://image.tmdb.org/t/p/original' + film.poster_path " :alt="film.title">
    <p class="text-2xl font-extrabold">  
      {{ film.original_title }}
    </p>
    <p class=" truncate text-ellipsis  ">
      {{ film.overview }}
    </p>
    <p>
      {{ film.vote_average }}/10
    </p>  
    <div class="flex flex-wrap gap-2">
      <span v-for="genre_id of film.genre_ids" :key="genre">
        {{ generi.find( (genre) => genre.id == genre_id ).name }}
      </span>  
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  film: {
    type: Object
  },
  generi: {
    type: Object
  },
})
</script>
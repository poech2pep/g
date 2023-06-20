<template>
  <!-- /movie/:slug -->
  <!-- /movie/qualunquecosa -->
  <div v-if="error">
    Si è verificato un errore
  </div>

  <div v-else  class="container mx-auto px-4 grid gap-8">
    <img class=" object-cover w-full max-h-[350px] rounded-lg"
      :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path" :alt="movie.title">
    <p class="text-2xl font-extrabold">
      {{ movie.original_title }}
    </p>
  </div>
  
</template>


<script setup >
const route = useRoute();
const { slug } = route.params;

// validare slug

const { data: movie, error } = await useApi('https://api.themoviedb.org/3/movie/' + slug)


</script>

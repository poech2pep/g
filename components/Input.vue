<template>
  <div class="gap-4">
  <input type="text" id="movie_title" class="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500" v-model="filmScritto"/>
  <button @click="$emit ('filtraElemento',filmScritto)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">invia</button>
  </div>
</template>
<script setup>
const filmScritto = ref()
</script>


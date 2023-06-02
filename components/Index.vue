<template>
  <ElementiInput @filtraElemento="Filtra" />
  <div class="flex flex-col bg-red-500 border border-blue-700">
    <ElementiElemento div v-for="film of elenco.results" key="film.id"/>
    <p class="text-4xl font-extrabold">{{ film.original_title }}</p>
    <p>{{ film.overview }}</p>
  </div>
</template>
<script setup>
const {data:elenco}= await useFetch ('https://api.themoviedb.org/3/discover/movie',{
  headers: {
    authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTM1NThjM2EyOGRkNWI2ODU2MmFmZWJlMTc2YjkyZSIsInN1YiI6IjY0NjVlM2UwZDE4NTcyMDEyMDdmOGY1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BTBmJSXvdZakHMSW6A5mbQCX9EJtDkVd31Ih9fR6i0Y'
    ,accept: 'application/json'
  }
})
async function Filtra (filmScritto){
  const {data}= await useFetch ('https://api.themoviedb.org/3/search/movie?query='+filmScritto,{
  headers: {
    authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTM1NThjM2EyOGRkNWI2ODU2MmFmZWJlMTc2YjkyZSIsInN1YiI6IjY0NjVlM2UwZDE4NTcyMDEyMDdmOGY1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BTBmJSXvdZakHMSW6A5mbQCX9EJtDkVd31Ih9fR6i0Y'
    ,accept: 'application/json'
  }
  }
   )}
   elenco.value=data.value
   </script>
<template>
  <div class="">
   <span>
    {{ film  }}
   </span> 

  </div>
</template>

<script setup>
const props = defineProps({
  film: {
    type: Object
  }
})
</script>
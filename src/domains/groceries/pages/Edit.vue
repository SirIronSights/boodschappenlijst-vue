<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div>
    Edit page works!  
    <p>Product ID: {{ id }}</p>
  </div>
</template>


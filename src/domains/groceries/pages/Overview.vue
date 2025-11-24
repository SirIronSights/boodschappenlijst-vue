<script setup>
import { reactive } from "vue";
import GroceriesTable from "../../../components/GroceriesTable.vue";
import { getAllProducts } from "./store";


  const products = reactive(getAllProducts.value);

</script>

<template>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav>
      <RouterLink to="/create">Create Something. ANYTHING!</RouterLink>
    </nav>
    <GroceriesTable :products="products" />
 </template>
<script setup>
import GroceryForm from '../../components/GroceryForm.vue';
import { computed } from 'vue';
import { addProduct ,getAllProducts } from "./store";


const product = ref({name: '', price: 0, quantity: 0});
const products = computed(() => getAllProducts.value);

function handleFormSubmit(newProduct) {
  addProduct(newProduct);
  product.value = {name: '', price: 0, quantity: 0 };
}


</script>

<template>
  <div>
    <h1>Create New Product</h1>

    <GroceryForm :product="product" @submit="handleFormSubmit" />

    <h2>All Products</h2>
    <table border="1" cellpadding="5" cellspacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price (€)</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in products" :key="index">
          <td>{{ p.name }}</td>
          <td>{{ p.price.toFixed(2) }}</td>
          <td>{{ p.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

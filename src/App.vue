<script setup>
import { reactive, computed, watch } from 'vue';

const products = reactive([
  { id: 'brood', name: 'Brood', price: 2.5, quantity: 0, total: 0 },
  { id: 'broccoli', name: 'Broccoli', price: 1.8, quantity: 0, total: 0 },
  { id: 'krentebollen', name: 'Krentebollen', price: 3.2, quantity: 0, total: 0 },
  { id: 'noten', name: 'Noten', price: 4.0, quantity: 0, total: 0 },
]);

watch(
  products,
  (newProducts) => {
    newProducts.forEach((product) => {
      product.total = product.price * product.quantity;
    });
  },
  { deep: true }
);

const totalCost = computed(() =>
  products.reduce((sum, product) => sum + product.total, 0)
);
</script>

<template>
  <div>
    <table>
      <tr v-for="(product, index) in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price.toFixed(2) }}</td>
        <td>
          <input type="number" v-model.number="product.quantity" min="0" />
        </td>
        <td>{{ product.total.toFixed(2) }}</td>
      </tr>
      <tr>
        <td colspan="3"><strong>Total Cost:</strong></td>
        <td>{{ totalCost.toFixed(2) }}</td>
      </tr>
    </table>
  </div>
</template>
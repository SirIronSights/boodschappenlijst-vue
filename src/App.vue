<script setup>
import { reactive, computed } from 'vue';

const products = reactive([
  { name: 'Brood', price: 2.5, quantity: 0 },
  { name: 'Broccoli', price: 1.8, quantity: 0 },
  { name: 'Krentebollen', price: 3.2, quantity: 0 },
  { name: 'Noten', price: 4.0, quantity: 0 },
]);

const totalCost = computed(() =>
  products.reduce((sum, product) => sum + product.price * product.quantity, 0)
);
</script>

<template>
  <div>
    <table>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
      <tr v-for="product in products" :key="product.name">
        <td>{{ product.name }}</td>
        <td>{{ product.price.toFixed(2) }}</td>
        <td>
          <input type="number" v-model.number="product.quantity" min="0" />
        </td>
        <td>{{ (product.price * product.quantity).toFixed(2) }}</td>
      </tr>
      <tr>
        <td colspan="3"><strong>Total Cost:</strong></td>
        <td>{{ totalCost.toFixed(2) }}</td>
      </tr>
    </table>
  </div>
</template>


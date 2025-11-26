<script setup>
import { computed } from 'vue';

const props = defineProps({
    products:Array
});

const totalCost = computed(() =>
  props.products.reduce((sum, product) => sum + product.price * product.quantity, 0)
);
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in props.products" :key="product.name">
          <td>{{ product.name }}</td>
          <td>{{ product.price.toFixed(2) }}</td>
          <td>
            <input type="number" v-model.number="product.quantity" min="0" />
          </td>
          <td>{{ (product.price * product.quantity).toFixed(2) }}</td>
          <td><RouterLink :to="{ name: 'edit', params: { id: product.id } }">Edit dit product!</RouterLink></td>
        </tr>
        <tr>
          <td colspan="3"><strong>Total Cost:</strong></td>
          <td>{{ totalCost.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
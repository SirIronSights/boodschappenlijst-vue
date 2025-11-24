import { computed, ref } from "vue";

const products = ref([
  { name: 'Brood', price: 2.5, quantity: 0 },
  { name: 'Broccoli', price: 1.8, quantity: 0 },
  { name: 'Krentebollen', price: 3.2, quantity: 0 },
  { name: 'Noten', price: 4.0, quantity: 0 },
]);

export const getAllProducts = computed(() => products.value);
export const getProductById = (id) => computed(() => products.value.find(product => product.id == id));

export const addProduct = (product) => products.value.push(product);
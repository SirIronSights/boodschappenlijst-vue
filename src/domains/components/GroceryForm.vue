<script setup>
import { reactive, watch } from 'vue';


const props =  defineProps({
    product: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(["submit"]);

const formProduct = reactive({...props.product});

watch(
  () => props.product,
  (newVal) => {
    Object.assign(formProduct, newVal);
  },
  { deep: true }
);

function handleSubmit(){
    emit("submit", { ...formProduct });
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label>Product Name</label>
            <input v-model="formProduct.name" type="text" required/>
        </div>
        <div>
            <label>Price</label>
            <input v-model="formProduct.price" type="number" required/>
        </div>
        <div>
            <label>Quantity</label>
            <input v-model.number="formProduct.quantity" type="number" required />
        </div>

        <button type="submit">Submit to me!</button>
    </form>
</template>
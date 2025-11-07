<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const products = ref([]);

const fetchProducts = async () => {
    const response = await fetch(`https://6909c69b1a446bb9cc1ff256.mockapi.io/api/products/APIProduct/${route.params.id}`);
    products.value = await response.json();
    console.log("Berhasil fetch data detail product");
}
onMounted(() => {
    fetchProducts();
});
</script>

<template>
  <div class="text-left w-[800px] mx-auto h-auto">
    <img :src="products.image" alt="Product Image" class="w-full h-[400px] object-cover rounded-lg mx-auto border-3 text-bold">
    <h1 class="">{{ products.title }}</h1>
    <h2>{{ products.price }}</h2>
    <p>Category: {{ products.category }}</p>
    <p>{{ products.description }}</p>

    <router-link to="/">back to home</router-link>
  </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['edit', 'delete']);
</script>

<template>
    <section class="flex justify-center m-[20px] bg-primary dark:bg-primary-dark text-text-normal dark:text-text-dark p-10 rounded-lg h-[600px] w-[400px]">
        <div class="card">
            <img :src="product.image" alt="image" class="w-full h-[400px] object-cover rounded-lg">
            <h2>{{ product.title }}</h2>
            <p class="bg-background dark:bg-background-dark w-fit px-5 mx-auto rounded-md">{{ product.category }}</p>
            <p>{{product.description}}</p>
            <router-link :to="`/product/${product.id}`">View Details</router-link>
            <button @click="$emit('edit', product)">Edit</button> 
            <button @click="$emit('delete', product.id)">Delete</button>
        </div>

    </section>
</template>

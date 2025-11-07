<script setup>
import { onMounted, ref } from 'vue'

const products = ref([]);
const showForm = ref(false);
const form = ref({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
})

const openNew = () => {
    form.value = {
        id: '', 
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
    }
    showForm.value = true;
    console.log("Open form new product");
}

const submit = async () => {
    const payload = {
        title: form.value.title,
        price: form.value.price,
        description: form.value.description,
        category: form.value.category,
        image: form.value.image
    }
    if (form.value.id) {
        await fetch(`https://6909c69b1a446bb9cc1ff256.mockapi.io/api/products/APIProduct/${form.value.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    } else {
        await fetch ('https://6909c69b1a446bb9cc1ff256.mockapi.io/api/products/APIProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    }
    showForm.value = false;
    await fetchProducts();
}

const fetchProducts = async () => {
    const response = await fetch('https://6909c69b1a446bb9cc1ff256.mockapi.io/api/products/APIProduct');
    products.value = await response.json();
    console.log("Berhasil fetch data");
}
const onEdit = (productEdit) => {
    form.value = {
        id: productEdit.id,
        title: productEdit.title,
        price: productEdit.price,
        description: productEdit.description,
        category: productEdit.category,
        image: productEdit.image
    }
    showForm.value = true;

}

const onDelete = async (id) => {
    await fetch(`https://6909c69b1a446bb9cc1ff256.mockapi.io/api/products/APIProduct/${id}`, {
        method: 'DELETE'
    });
    await fetchProducts();
}
onMounted(() => {
    fetchProducts();
});
</script>

<template>
    <div class="text-center p-6">
        <h1>Daftar Product</h1>
        <button @click="openNew">New Product</button>
        <div v-if="showForm" class="mb-6 gap-5">
            <input type="text" v-model="form.title" placeholder="Title" class="w-full border p-2 mb-2 rounded">
            <input type="number" v-model="form.price" placeholder="Price" class="w-full border p-2 mb-2 rounded">
            <textarea v-model="form.description" placeholder="Description" class="w-full border p-2 mb-2 rounded"></textarea>
            <input type="text" v-model="form.category" placeholder="Category" class="w-full border p-2 mb-2 rounded">
            <input type="text" v-model="form.image" placeholder="Image URL" class="w-full border p-2 mb-2 rounded">
            <button @click="submit" class="bg-blue-500 rounded-lg px-4 py-2">Submit</button>
            <button @click="showForm = false" class="bg-red-500 rounded-lg px-4 py-2">Cancel</button>
        </div>
        <div class="grid grid-cols-3 gap-1">
            <CardProduct v-for="product in products" :key="product.id" :product="product" @edit="onEdit" @delete="onDelete" />
        </div>

    </div>
</template>
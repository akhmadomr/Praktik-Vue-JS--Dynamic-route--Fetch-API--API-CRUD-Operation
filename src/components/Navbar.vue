<script>
export default {
    data() {
        return {
            nama_mahasiswa: ["Me", "Metoo", "MeAgain"]
        }
    }
}
</script>

<template>
  <nav class="flex fixed top-0 left-0 right-0 bg-primary dark:bg-primary-dark text-text-normal dark:text-text-dark p-4 items-center">
    <div class="flex gap-4">
        <img src="/favicon.ico" alt="logo">
        <span>Vuejstia24</span>

    </div>
    <ul class="flex list-none gap-4 justify-end ml-auto">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/aboutview">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
  <p v-html="nama_mahasiswa"></p>
</template>


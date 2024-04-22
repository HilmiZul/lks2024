<template>
  <div class="col-lg-4">
    <div class="mt-5 text-center fs-1">APOTEK <span class="font-bold">12Jam</span></div>
    <div class="card rounded-4 my-4 shadow-lg rounded-card">
      <div class="card-body p-5">
        <form @submit.prevent="handleLogin">
          <div class="mb-5">
            <input v-model="email" type="email" class="form-control" placeholder="Masukkan email">
          </div>
          <div class="mb-4">
            <input v-model="password" type="password" class="form-control" placeholder="Masukkan password">
          </div>
          <div v-if="email && password" class="mt-5">
            <button type="submit" class="btn btn-grey rounded-btn px-5 py-2">Masuk</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'login'
})

const supa = useSupabaseClient()
const email = ref("")
const password = ref("")

async function handleLogin() {
  const { data, error } = await supa.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if(data) navigateTo('/')
}
</script>

<style scoped>
.font-bold {
  font-family: 'Avenir Next';
  font-weight: 800;
}

.card {
  border: none
}
</style>
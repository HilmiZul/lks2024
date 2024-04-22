<template>
  <div class="my-5 text-center">
    <h1>Keluar aplikasi...</h1>
  </div>
</template>

<script setup>
const supa = useSupabaseClient()

async function keluar() {
  const { error } = await supa.auth.signOut()
  if(!error) navigateTo('/login')
}

onMounted(() => keluar())
</script>
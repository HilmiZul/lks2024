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

async function insertLog() {
  const user = useSupabaseUser()
  const { data, error } = await supa
    .from('Tbl_LogActivity')
    .insert([{
      Aktivitas: 'logout',
      username: user.value.user_metadata.username,
      nama: user.value.user_metadata.username,
      tipe_user: user.value.user_metadata.tipe_user,
    }])
    .select()
  if(data) keluar()
}

onMounted(() => {
  insertLog()
})
</script>
<template>
  <div class="row">
    <div class="col-lg-12">
      <h1>HOME.</h1>
      <span v-if="user">
        <h3>selamat datang, {{ user.user_metadata.tipe_user }}</h3>
      </span>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
</script>
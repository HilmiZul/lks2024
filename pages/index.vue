<template>
  <div class="row">
    <div class="col-lg-12">
      <h1>HOME.</h1>
      <h3>selamat datang, (username dan tipe user)</h3>
      <div v-if="user">
        {{ user.user_metadata.username }}
        {{ user.user_metadata.tipe_user }}
      </div>

    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
</script>
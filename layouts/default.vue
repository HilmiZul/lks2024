<template>
  <div class="container-fluid">
    <!-- <Navbar /> -->
      <span v-if="user">
        <Navbar v-if="user.user_metadata.tipe_user == 'admin'" />
        <NavbarApoteker v-if="user.user_metadata.tipe_user == 'apoteker'" />
        <NavbarKasir v-if="user.user_metadata.tipe_user == 'kasir'" />
      </span>
      <slot />
  </div>
</template>

<script setup>
const user = useSupabaseUser()
</script>

<style>
@font-face {
  font-family: 'Avenir Next';
  src: url('../assets/fonts/AvenirNext.ttc');
}

@font-face {
  font-family: 'Avenir';
  src: url('../assets/fonts/Avenir.ttc');
}

body {
  font-family: 'Avenir';
  font-weight: normal;
  color: #5F5F5F;
  background: #fff url('../assets/img/bg.png') no-repeat bottom right fixed;
}

.font-bold {
  font-weight: bold;
}

.btn-grey {
  background-color: #D8D8D8 !important;
  border-color: #979797 !important;
}

.form-control {
  border: none;
  border-bottom: 1px solid #979797;
  border-radius: 0;
  box-shadow: none !important;
}
.form-control:focus {
  border-bottom: 1px solid #979797;
}

.rounded-card {
  border-radius: 33px !important;
}
.rounded-btn {
  border-radius: 22.5px !important;
}
</style>
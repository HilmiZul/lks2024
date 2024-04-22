<template>
  <div class="container-fluid">
    <div class="row">
      <slot />
    </div>
  </div>
</template>


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

.shadow-lg {
  box-shadow: 0 2px 45px rgba(144, 144, 144, 64) !important;
}

.btn-grey {
  background-color: #D8D8D8 !important;
  border-color: #979797 !important
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
</style>
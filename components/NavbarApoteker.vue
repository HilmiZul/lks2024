<template>
  <div class="row">
    <div class="col-lg-12">
      <nav class="navbar navbar-expand-lg bg-light mx-2">
        <NuxtLink class="navbar-brand font-bold" to="/">12Jam</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink to="/obat" class="nav-link">OBAT</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/resep" class="nav-link">RESEP</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/logout" class="nav-link text-danger">LOGOUT.</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
nav.navbar {
  color: #ddffaa !important;
}
</style>
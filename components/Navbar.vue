<template>
  <div class="row">
    <div class="col-lg-12">
      <nav class="navbar navbar-expand-lg bg-light mx-2">
        <a class="navbar-brand font-bold" href="#">12Jam</a>
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
              <NuxtLink to="/" class="nav-link" aria-current="page">BERANDA</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/obat" class="nav-link" aria-current="page">OBAT</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/resep" class="nav-link">RESEP</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/transaksi" class="nav-link">TRANSAKSI</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/laporan" class="nav-link">LAPORAN</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/log" class="nav-link">LOG ACT.</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/users" class="nav-link">USERS</NuxtLink>
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
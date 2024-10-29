<template>
  <div class="col-lg-12">
    <div class="mt-5 fs-1">TAMBAH <span class="font-bold">USER</span></div>
    <div class="row">
      <div class="col-lg-4">
        <div class="card rounded-4 my-4 shadow-lg rounded-card">
          <div class="card-body p-5">
            <form @submit.prevent="tambahUser">
              <div class="mb-5">
                <input v-model="email" type="email" class="form-control" placeholder="Masukkan email">
              </div>
              <div class="mb-5">
                <input v-model="password" type="password" class="form-control" placeholder="Masukkan password">
              </div>
              <div class="mb-5">
                <input v-model="username" type="text" class="form-control" placeholder="Masukkan username">
              </div>
              <div class="mb-4">
                <select v-model="tipe_user" class="form-control form-select">
                  <option value="">PILIH TIPE USER</option>
                  <option value="admin">Admin</option>
                  <option value="apoteker">Apoteker</option>
                  <option value="kasir">Kasir</option>
                </select>
              </div>
              <div class="mt-5">
                <button type="submit" class="btn btn-grey rounded-btn px-5 py-2">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supa = useSupabaseClient()
const email = ref("")
const password = ref("")
const username = ref("")
const tipe_user = ref("")

async function tambahUser() {
  const { data, error } = await supa.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username: username.value,
        tipe_user: tipe_user.value,
      }
    }
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

.rounded-card {
  border-radius: 33px !important;
}
.rounded-btn {
  border-radius: 22.5px !important;
}
</style>
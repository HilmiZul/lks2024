<template>
  <div class="row">
    <div class="col-lg-12">
      <NuxtLink to="/obat" class="btn btn-grey">Kembali</NuxtLink>
      <h1>TAMBAH <span class="font-bold">OBAT</span></h1>
      <div class="card rounded-4 shadow-lg my-4 p-5">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <form @submit.prevent="insertObat">
                <div class="mb-4">
                  <label>Kode Obat</label>
                  <input v-model=form.Kode_Obat type="text" class="form-control" required autofocus/>
                </div>
                <div class="mb-4">
                  <label>Nama Obat</label>
                  <input v-model=form.Nama_Obat type="text" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>Tangal Kadaluarsa</label>
                  <input v-model=form.Expired_Date type="date" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>Jumlah</label>
                  <input v-model=form.Jumlah type="number" min="0" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>(Rp) Harga</label>
                  <input v-model=form.Harga type="number" min="0" class="form-control" required />
                </div>
                <button class="btn btn-grey rounded-btn px-5 py-2" :disabled="isSaving">
                  <span v-if="!isSaving">Simpan</span>
                  <span v-else>Sedang menyimpan</span>
                </button>
                <NuxtLink to="/obat" class="btn btn-light float-end rounded-btn px-5 py-2">Kembali</NuxtLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'auth-admin-apoteker' })

const client = useSupabaseClient()
const form = ref({
  Kode_Obat: '',
  Nama_Obat: '',
  Expired_Date: '',
  Jumlah: '',
  Harga: '',
})
const isSaving = ref(false)

async function insertObat() {
  isSaving.value = true
  const { data, error } = await client
    .from('Tbl_Obat')
    .insert([form.value])
    .select()
  if(data) {
    isSaving.value = false
    navigateTo('/obat')
  }
}

</script>



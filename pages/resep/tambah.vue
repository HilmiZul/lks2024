<template>
  <div class="row">
    <div class="col-lg-12">
      <NuxtLink to="/resep" class="btn btn-grey">Kembali</NuxtLink>
      <h1>BUAT <span class="font-bold">RESEP</span></h1>
      <div class="card rounded-4 shadow-lg my-4 p-5">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <form>
                <div class="mb-4">
                  <label>Nomor Resep</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>Nama Dokter</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>Nama Pasien</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>Nama Obat</label>
                  <select class="form-control form-select">
                    <option value="">-</option>
                    <option value="">Hydroxira</option>
                    <option value="">Proneuron</option>
                    <option value="">Paracetamol</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label>Jumlah Obat</label>
                  <input type="number" class="form-control" required />
                </div>
                <button class="btn btn-grey rounded-btn px-5 py-2">Kirim</button>
                <NuxtLink to="/resep" class="float-end btn btn-light rounded-btn px-5 py-2">Kembali</NuxtLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>



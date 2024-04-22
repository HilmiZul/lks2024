<template>
  <div class="row">
    <div class="col-lg-12">
      <NuxtLink to="/obat" class="btn btn-grey">Kembali</NuxtLink>
      <h1>TAMBAH <span class="font-bold">OBAT</span></h1>
      <div class="card rounded-4 shadow-lg my-4 p-5">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <form>
                <div class="mb-4">
                  <label>Kode Obat</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>Nama Obat</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>Tangal Kadaluarsa</label>
                  <input type="date" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>Jumlah</label>
                  <input type="number" min="0" class="form-control" required />
                </div>
                <div class="mb-4">
                  <label>(Rp) Harga</label>
                  <input type="number" min="0" class="form-control" required />
                </div>
                <button class="btn btn-grey rounded-btn px-5 py-2">Kirim</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>



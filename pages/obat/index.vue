<template>
  <div class="row">
    <div class="col-lg-12">
      <NuxtLink to="/obat/tambah" class="btn btn-grey">Tambah</NuxtLink>
      <h1>DATA <span class="font-bold">OBAT</span></h1>
      <div class="card rounded-4 shadow-lg my-4">
        <div class="card-body">
          <div class="text-muted">menampilkan 1 dari 1</div>
          <form>
            <input type="search" class="form-control border-1 rounded-3 my-4" placeholder="cari obat...">
          </form>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>KODE</th>
                <th>NAMA</th>
                <th>EXPIRED</th>
                <th>JUMLAH</th>
                <th>HAPUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>PRC001</td>
                <td>PARACETAMOL</td>
                <td>22 April 2025</td>
                <td>200</td>
                <td>hapus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
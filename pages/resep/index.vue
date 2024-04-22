<template>
  <div class="row">
    <div class="col-lg-12">
      <NuxtLink to="/resep/tambah" class="btn btn-grey">Tambah</NuxtLink>
      <h1><span class="font-bold">RESEP</span></h1>
      <div class="card rounded-4 shadow-lg my-4">
        <div class="card-body">
          <div class="text-muted">menampilkan 1 dari 1</div>
          <form>
            <input type="search" class="form-control border-1 rounded-3 my-4" placeholder="cari resep...">
          </form>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>NOMOR</th>
                <th>DOKTER</th>
                <th>PASIEN</th>
                <th>OBAT</th>
                <th>JUMLAH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>PRC001</td>
                <td>Jeffery</td>
                <td>Zul Hilmi</td>
                <td>Hydroxirea</td>
                <td>1</td>
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
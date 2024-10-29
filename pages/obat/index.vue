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
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in items" :key="i">
                <td>{{ i+1 }}</td>
                <td>{{ item.Kode_Obat }}</td>
                <td>{{ item.Nama_Obat }}</td>
                <td>{{ item.Expired_Date }}</td>
                <td>{{ item.Jumlah }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'auth-admin-apoteker' })

const client = useSupabaseClient()
const items = ref([])

const getObat = async () => {
  const { data, error } = await client
    .from('Tbl_Obat')
    .select()
    .range(0, 19)
    .order('id', { ascending: false })
  if(data) items.value = data
}

onMounted(() => getObat())
</script>
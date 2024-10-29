<template>
  <div class="row">
    <div class="col-lg-12">
      <h1>LOG <span class="font-bold">ACTIVITY</span></h1>
      <div class="card rounded-4 shadow-lg my-4">
        <div class="card-body">
          <div class="text-muted">menampilkan 1 dari 1</div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>USER</th>
                <th>WAKTU</th>
                <th>AKTIVITAS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td colspan="4" class="py-5 text-center text-muted">sedang memuat...</td>
              </tr>
              <tr v-for="(log, i) in logs" :key="i">
                <td>{{ i+1 }}</td>
                <td>{{ log.username }}</td>
                <td>{{ log.Tanggal }}, {{ log.Waktu }}</td>
                <td>{{ log.Aktivitas }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'auth-admin' })

const client = useSupabaseClient()
const logs = ref([])
const loading = ref(true)

const getLogs = async () => {
  loading.value = true
  const { data, error } = await client
    .from('Tbl_LogActivity')
    .select()
    .range(0, 19)
    .order('id', { ascending: false })
  if(data) {
    logs.value = data
    loading.value = false
  }
}

onMounted(() => getLogs())
</script>
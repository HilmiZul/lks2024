export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()

  if (user.value?.user_metadata.tipe_user != 'admin' &&
      user.value?.user_metadata.tipe_user != 'kasir') {
    return navigateTo('/')
  }
})

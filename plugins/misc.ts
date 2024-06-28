export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide:{
            storageUrl: computed(()=>useRuntimeConfig().public.storage_bucket_url)
        }
    }
})

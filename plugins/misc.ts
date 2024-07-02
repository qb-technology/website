export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created',()=>{
        useAsyncData('loaders', async () =>{
            return await Promise.all([
                useGeneralStore().getData()
            ])
        })
    })
    return {
        provide:{
            storageUrl: computed(()=>useRuntimeConfig().public.storage_bucket_url)
        }
    }
})

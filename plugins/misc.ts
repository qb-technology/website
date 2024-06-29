export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created',()=>{
        useAsyncData('loaders', async () =>{
            await useProjectsStore().getProfiles()
        })
    })
    return {
        provide:{
            storageUrl: computed(()=>useRuntimeConfig().public.storage_bucket_url)
        }
    }
})

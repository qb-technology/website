export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created',()=>{
        useAsyncData('loaders', async () =>{
            await Promise.all([
                useProjectsStore().getProfiles(),
                useServiceFeatureStore().getFeatures()
            ])
        })
    })
    return {
        provide:{
            storageUrl: computed(()=>useRuntimeConfig().public.storage_bucket_url)
        }
    }
})

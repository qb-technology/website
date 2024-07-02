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
            storageUrl: computed(()=>useRuntimeConfig().public.storage_bucket_url),
            socialContacts:{
                phone:'+393883835946',
                instagram:'https://www.instagram.com/qbtechnology_/',
                facebook:'https://www.facebook.com/profile.php?id=100083577977374',
                github:'https://github.com/qb-technology',
                twitter:'#',
                linkedin:'#',
                youtube:'#',
            }
        }
    }
})

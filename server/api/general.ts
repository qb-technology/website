// import { Database } from '~/types/supabase'

export default defineEventHandler(async (event) => {
  const client = await supabaseServer(event)
  const [services, projects] = await Promise.all([
    client.from('services').select('title,excerpt,icon'),
    client.from('devProject').select('title,desc,favicon,image,link', { count: 'exact', head: false }),
  ])

  return {
    services:services.data,
    projects:{
      data:projects.data,
      count:projects.count
    }
  }
})

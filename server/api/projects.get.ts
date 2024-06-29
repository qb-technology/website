// import { Database } from '~/types/supabase'

export default defineEventHandler(async (event) => {
  const client = await supabaseServer(event)
  const [projects] = await Promise.all([
    client.from('devProject').select('title,desc,favicon,image,link', { count: 'exact', head: false }),
  ])

  return {
      data: projects.data,
      count: projects.count,
  }
})

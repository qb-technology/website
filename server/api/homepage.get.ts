// import { Database } from '~/types/supabase'

export default defineEventHandler(async (event) => {
  const client = await supabaseServer(event)
  const [services] = await Promise.all([
    client.from('service').select('title,description,icon'),
  ])

  return {
    services: {
      data: services.data || null,
    },
  }
})

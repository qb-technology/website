// import { Database } from '~/types/supabase'

export default defineEventHandler(async (event) => {
  const client = await supabaseServer(event)
  const [services] = await Promise.all([
    client.from('service_features').select('title,description,icon'),
  ])

  return services.data
})

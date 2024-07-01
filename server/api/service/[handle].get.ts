export default defineEventHandler(async (event) => {
  const client = await supabaseServer(event)
  const handle = getRouterParam(event, 'handle') as string

  if (!handle) {
    return null
  }

  const service = await client.from('services').select(`
    *,
    serviceFaqs (
      question,
      answer
    ),
    serviceApproach (
      step,
      title,
      description
    ),
    service_features (
      title,
      description,
      icon
    )
    `).eq('handle', handle)
  return service.data ? { ...service.data[0] } : null
})

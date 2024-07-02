export default defineEventHandler(async (event) => {
  const client = await supabaseServer(event)
  const body = await readBody(event)

  if (!body || !body.name || !body.email || !body.msg) {
    throw createError('Missing required data')
  }

  const d = await client.from('contact_form').insert({
    email: body.email,
    name: body.name,
    msg: body.msg,
  })
  return d.error
? {
    status: false,
    msg: 'error',
    data: d,
  }
: {
    status: true,
    msg: 'done',
    data: d,
  }
})

import type { H3Event } from 'h3'
import type { Database } from '~/types/supabase'
import { serverSupabaseClient } from '#supabase/server'

export async function supabaseServer(event: H3Event) {
    return await serverSupabaseClient<Database>(event)
}

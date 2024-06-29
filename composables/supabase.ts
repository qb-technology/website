import type { Database } from '~/types/supabase'

export const useSupabase = () => {
  return useSupabaseClient<Database>()
}

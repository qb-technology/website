import type { Database } from '~/types/supabase.js'

export const useProjectsStore = defineStore({
  id: 'projectsStore',
  state: () => ({
    count: 0 as number || null,
    project: [] as Array<Database['public']['Tables']['devProject']['Row']> || null,
  }),
  actions: {
    async getProfiles() {
      const d = await $fetch('/api/projects', { method: 'GET' })
      if (d) {
        this.count = d.count
        this.project = d.data as any
      }
    },
  },
})

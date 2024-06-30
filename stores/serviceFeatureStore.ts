import { defineStore } from 'pinia'
import type { Database } from '~/types/supabase'

export const useServiceFeatureStore = defineStore({
  id: 'serviceFeatureStore',
  state: () => ({
    features: [] as Array<{ title: string | null, description: string | null, icon: string | null }>,
  }),
  actions: {
    async getFeatures() {
      const d = await $fetch('/api/service-feature', { method: 'GET' })
      if (d) {
        this.features = d
      }
    },
  },
})

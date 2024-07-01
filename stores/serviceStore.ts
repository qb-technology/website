import { defineStore } from 'pinia'

export const useServiceStore = defineStore({
  id: 'serviceStore',
  state: () => ({
    services: [] as Array<{ title: string | null, description: string | null, icon: string | null, handle:string | null }>,
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

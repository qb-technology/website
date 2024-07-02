import { defineStore } from 'pinia'

export const useGeneralStore = defineStore({
  id: 'myGeneralStore',
  state: () => ({ }),
  actions: {
    async getData() {
      const projectStore = useProjectsStore()
      const serviceStore = useServiceStore()

      const d = await $fetch('/api/general',{method:'GET'})
      if(d) {
        if(d.projects) {
          projectStore.project = d.projects.data as any
          projectStore.count = d.projects.count
        }
        if(d.services) {
          serviceStore.services = d.services as any
        }
      }
      return d
    }
  }
})

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    dropdownMenuList: []
  }),
  actions: {
    updateDropdownMenuList(item) {
      const exists = this.dropdownMenuList.some((existingItem) => existingItem.value === item.value)
      if (!exists) {
        this.dropdownMenuList.push(item)
      }
    }
  }
})

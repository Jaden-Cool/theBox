import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    dropdownMenuList: []
  }),
  actions: {
    updateDropdownMenuList(item) {
      this.dropdownMenuList.push(item)
    }
  }
})

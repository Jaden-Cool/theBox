import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    dropdownMenuList: []
  }),
  actions: {
    updateDropdownMenuList(arr) {
      this.dropdownMenuList = arr
      // const exists = this.dropdownMenuList.some((existingItem) => existingItem.value === item.value)
      // if (!exists) {
      //   this.dropdownMenuList.push(item)
      // }
    }
  }
})

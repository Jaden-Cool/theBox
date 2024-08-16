import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    dropdownMenuList: [],
    path:'',
    active:0,
  }),
  actions: {
    updateDropdownMenuList(arr) {
      this.dropdownMenuList = arr
    }
  }
})

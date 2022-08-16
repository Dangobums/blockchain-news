import { defineStore } from 'pinia'
export const counterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    // automatically infers the return type as a number
    doubleCount(state) {
      return state.counter * 2
    },
    // the return type **must** be explicitly set
    doublePlusOne() {
      // autocompletion and typings for the whole store ✨
      return this.doubleCount + 1
    },
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})

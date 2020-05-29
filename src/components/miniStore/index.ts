import { ref, inject, provide } from 'vue'

type UseStore = {
  [key: string]: any
}

export const key = Symbol()

export const createStore = () => {
  const count = ref(0)
  const increment = () => count.value++
  return {
    count,
    increment,
  }
}

export const provideStore = () => {
  provide(key, createStore())
}

export const useStore = (): UseStore | undefined => {
  return inject(key)
}

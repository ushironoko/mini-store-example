import { inject, provide } from 'vue'

export type ProvideKey = string | Symbol

export const provideStore = <T extends string | object> (store: T, key?: string) => {
  const provideKey = key == null ? Symbol() : key
  provide(provideKey, store)
  return provideKey
}

export const useStore = <T>(key: string | Symbol) => {
  return inject<T>(key)
}

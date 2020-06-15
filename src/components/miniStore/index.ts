import { inject, provide } from 'vue'

export type ProvideKey = string | Symbol

export const provideStore = <T extends string | object> (store: T, key?: symbol | string) => {
  const provideKey = key == null ? Symbol() : key
  provide(provideKey, store)
  return provideKey
}

export const useMiniStore = <T>(key: string | Symbol, defaultValue?: T) => {
  return inject<T>(key, defaultValue || {} as T)
}

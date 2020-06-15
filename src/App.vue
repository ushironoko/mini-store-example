<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { provideStore } from './components/miniStore'
import Index from './components/index.vue'
import Sub from './components/sub.vue'

export type CounterStore = {
  count: Ref<number>
  increment: Function
}

export default defineComponent({
  components: {
    Index,
    Sub,
  },
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    const store: CounterStore = {
      count,
      increment,
    }
    const injectKey1 = provideStore(store, 'injectKey1')
    const injectKey2 = provideStore('ushironoko', 'injectKey2')

    return {
      key1: injectKey1.provideKey,
      key2: injectKey2.provideKey,
    }
  }
})
</script>

<template>
  <div>
    <Sub :counterKey="key1" />
    <Index :counterKey="key1" :nameKey="key2" />
  </div>
</template>

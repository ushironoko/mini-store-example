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
      injectKey1,
      injectKey2,
    }
  }
})
</script>

<template>
  <div>
    <Sub :counterKey="injectKey1" />
    <Index :counterKey="injectKey1" :nameKey="injectKey2" />
  </div>
</template>

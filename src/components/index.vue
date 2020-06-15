<script lang="ts">
import { defineComponent, PropType, inject } from 'vue'
import { useStore, ProvideKey } from './miniStore'
import { CounterStore } from '../App.vue'

export default defineComponent({
  props: {
    counterKey: {
      type: String as PropType<ProvideKey>,
      required: true,
    },
    nameKey: {
      type: String as PropType<ProvideKey>,
      required: true,
    },
  },
  setup(props) {
    const counterStore = useStore<CounterStore>(props.counterKey)
    const increment = counterStore && counterStore.increment || (() => {})
    const name = useStore<string>(props.nameKey) || ''

    return {
      increment,
      name,
    }
  }
})
</script>

<template>
  <button @click="increment">increment</button>
  <div>created by {{ name }}</div>
</template>

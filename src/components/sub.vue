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
  },
  setup(props) {
    const counterStore = useStore<CounterStore>(props.counterKey)
    const count = counterStore && counterStore.count || 0

    return {
      count,
      name,
    }
  }
})
</script>

<template>
  <div>{{ count }}</div>
</template>

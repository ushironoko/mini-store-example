<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useMiniStore, ProvideKey } from './miniStore'
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
    const { increment } = useMiniStore(props.counterKey, {} as CounterStore)
    const name = useMiniStore(props.nameKey, '')

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

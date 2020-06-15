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
  },
  setup(props) {
    const { count } = useMiniStore(props.counterKey, {} as CounterStore)

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

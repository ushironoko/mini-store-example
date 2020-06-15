<script lang="ts">
import { defineComponent, PropType } from 'vue'
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
    const { count } = useStore(props.counterKey, {} as CounterStore)

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

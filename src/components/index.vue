<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from './miniStore'

export default defineComponent({
  setup() {
    const { increment } = useStore()
    return {
      increment
    }
  }
})
</script>

<template>
  <button @click="increment">increment</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useStore } from './miniStore'

export default defineComponent({
  setup() {
    const { count } = useStore()
    return {
      count
    }
  }
})
</script>

<template>
  <div>{{ count }}</div>
</template>

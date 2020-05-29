<script lang="ts">
import { defineComponent, provide } from 'vue'
import { provideStore } from './components/miniStore'
import Index from './components/index.vue'
import Sub from './components/sub.vue'

export default defineComponent({
  components: {
    Index,
    Sub,
  },
  setup() {
    provideStore()
  }
})
</script>

<template>
  <div>
    <Sub />
    <Index />
  </div>
</template>

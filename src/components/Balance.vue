<template>
  <div class="Balance">
    <h4>Your Balance</h4>
    <span :style="totalBalance > 0 ? 'color: #2dcc71' : 'color: #c0382a'">${{ totalBalance }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  totalBalance: {
    type: Number,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
h4 {
  text-transform: uppercase;
  margin: 0 0 5px;
}
span {
  font-size: 40px;
  font-weight: bold;
}
</style>

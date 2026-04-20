<template>
  <div class="ListTransaction">
    <h4>History</h4>
    <ul>
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class="transaction.amount > 0 ? 'plus' : 'minus'"
      >
        {{ transaction.name }} <span>${{ transaction.amount }}</span>
        <button class="deleteBtn" @click.prevent="deleteTransaction(transaction.id)">X</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { defineEmits } from 'vue'
const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['deleteNow'])

function deleteTransaction(id) {
  emit('deleteNow', id)
}
</script>

<style lang="scss" scoped>
h4 {
  margin: 0 0 20px;
  padding: 0 0 10px;
  border-bottom: 1px solid #ccc;
}
li {
  padding: 10px 20px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.265);
  // overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 10px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &.plus::before {
    background-color: #2dcc71;
  }
  &.minus::before {
    background-color: #c0382a;
  }
  button {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
    border: none;
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    color: red;
    transition: 0.2s linear;
    opacity: 0;
  }
  &:hover button {
    opacity: 1;
  }
}
</style>

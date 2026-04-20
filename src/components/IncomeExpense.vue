<template>
  <div class="IncomeExpense">
    <div class="income">
      <h4>income</h4>
      <span>${{ income }}</span>
    </div>
    <div class="expense">
      <h4>expense</h4>
      <span>${{ expense }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.IncomeExpense {
  display: flex;
  justify-content: space-around;
  background-color: white;
  margin: 20px 0;
  box-shadow: 3px 6px 3px rgba(0, 0, 0, 0.185);
  .income,
  .expense {
    padding: 20px;
    text-align: center;
    h4 {
      margin: 0 0 10px;
    }
    span {
      font-size: 30px;
      font-weight: bold;
    }
  }
  .income {
    span {
      color: #2dcc71;
    }
  }
  .expense {
    span {
      color: #c0382a;
    }
  }
}
</style>

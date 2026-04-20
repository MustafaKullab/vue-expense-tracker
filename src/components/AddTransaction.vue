<template>
  <div class="AddTransaction">
    <h4>Add New Transaction</h4>
    <form action="">
      <div class="form-control">
        <label for="name">Text</label>
        <input type="text" id="name" placeholder="Enter Text..." v-model="name" />
      </div>
      <div class="form-control">
        <label for="amount"
          >Amount <br />
          (negative - exponse,positive - exponse)</label
        >
        <input type="number" id="amount" placeholder="Enter amount..." v-model="amount" />
      </div>
      <button class="addBtn" type="submit" @click.prevent="addTransaction">Add Transaction</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const emit = defineEmits(['newTransaction'])

const name = ref('')
const amount = ref('')
function addTransaction() {
  if (!name.value || !amount.value) {
    toast.error('Please add a description and amount.')
    return
  }
  const transactionData = {
    id: Math.floor(Math.random() * 1000000),
    name: name.value,
    amount: parseFloat(amount.value),
  }

  emit('newTransaction', transactionData)

  name.value = ''
  amount.value = ''
}
</script>

<style lang="scss" scoped>
.AddTransaction {
  margin-top: 40px;
  h4 {
    margin: 0 0 20px;
    padding: 0 0 10px;
    border-bottom: 1px solid #ccc;
  }
  form {
    .form-control {
      label {
        display: block;
        margin-bottom: 5px;
      }
      input {
        padding: 8px;
        width: 100%;
        border: 1px solid #ccc;
        outline: none;
        border-radius: 4px;
      }
      margin-bottom: 20px;
    }
    button {
      padding: 10px;
      background-color: #785dff;
      border: none;
      outline: none;
      border-radius: 4px;
      width: 60%;
      display: block;
      margin: 0 auto;
      color: white;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>

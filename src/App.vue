<template>
  <div class="page">
    <Header />
    <div class="container">
      <Balance :totalBalance="totalBalance" />
      <IncomeExpense :income="income" :expense="expense" />
      <ListTransaction :transactions="transactions" @deleteNow="deleteTransaction" />
      <AddTransaction @new-transaction="addTransToArray" />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpense from './components/IncomeExpense.vue'
import ListTransaction from './components/ListTransaction.vue'
import AddTransaction from './components/AddTransaction.vue'
import { useToast } from 'vue-toastification'
import { computed, onMounted, ref } from 'vue'

const toast = useToast()

const transactions = ref([])

// Local Storage
function saveOnLocalStorage() {
  localStorage.setItem('transaction', JSON.stringify(transactions.value))
}

function updateLocalStorage() {
  const savedItems = localStorage.getItem('transaction')
  if (savedItems) {
    transactions.value = JSON.parse(savedItems)
  }
}

onMounted(() => {
  updateLocalStorage()
})

// Computed Functions
// total balance
const totalBalance = computed(() => {
  return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0)
})

// income
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
})

// expense
const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
})

// Functions
// Add Transaction
function addTransToArray(transactionData) {
  transactions.value.push(transactionData)

  toast.success('Transaction added successfully!.')

  saveOnLocalStorage()
}

function deleteTransaction(id) {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)

  toast.success('Removed successfully.')

  saveOnLocalStorage()
}
</script>

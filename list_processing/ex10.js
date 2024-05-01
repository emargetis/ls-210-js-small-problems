function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

function isItemAvailable(id, transactions) {
  let filteredTransactions = transactionsFor(id, transactions);
  
  return 0 < filteredTransactions.reduce((sum, item) => {
    if (item.movement === 'out') {
      return sum - item.quantity;
    } else if (item.movement === 'in') {
      return sum + item.quantity;
    }
  }, 0);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
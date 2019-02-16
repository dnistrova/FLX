function userCard(index) {
  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];
  let key = index;
  const tax = 0.005;

  let card = [];

  function getCurrentTime() {
    return new Date().toLocaleString('en-GB', { timeZone: 'Europe/Kiev' });
  }

  function log(operationType, amount) {
    historyLogs.push({
      operationType: operationType,
      credits: amount,
      operationTime: getCurrentTime()
    });
  }

  card.getCardOptions = function () {
    return {
      balance: balance,
      transactionLimit: transactionLimit,
      historyLogs: historyLogs,
      key: key
    };
  }

  card.putCredits = function (amount) {
    balance += amount;
    log('Received credits', amount);
  }

  card.takeCredits = function (amount) {
    if (balance >= amount && amount <= transactionLimit) {
      balance -= amount;
      log('Withdrawal of credits', amount);
    } else {
      console.log('Your account has insufficient funds for this transaction');
    }
  }

  card.setTransactionLimit = function (amount) {
    transactionLimit = amount;
    log('Transaction limit change', amount);
  }

  card.transferCredits = function (amount, cardToTransferTo) {
    let amountWithTaxes = amount + tax * amount;
    if (balance >= amountWithTaxes && amountWithTaxes <= transactionLimit) {
      card.takeCredits(amountWithTaxes);
      cardToTransferTo.putCredits(amount);
    } else {
      console.log('Transaction failed. You have exceeded the limit');
    }
  }

  return card;
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.userCards = [];
    this.maxCards = 3;
  }

  addCard() {
    if (this.userCards.length < this.maxCards) {
      let index = this.userCards.length + 1;
      let card = userCard(index);

      this.userCards.push(card);
    } else {
      console.log('Maximum number of credit cards is ' + this.maxCards);
    }
  }

  getCardByKey(key) {
    return this.userCards[key - 1];
  }
}

/*
let user = new UserAccount('Bob');
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions()); 
*/

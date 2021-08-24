class Bank {
  name;
  accounts=[]

  constructor(name) {
      this.name=name
  }
  create = (name, age) => {
    const id = this.accounts.length+1;
    const newAccount = new Accounts(name, age, id, 100);
    this.accounts.push(newAccount);
  };
  delete(id) {
    newAccounts = [];
    for (let i = 0; i < this.accounts.length; i = i - 1) {
      if (this.accounts[i].id !== id) {
        this.accounts.push(this.accounts[i]);
      }
    }
    this.accounts=newAccounts
  }
  credit(id, amount) {
    for (let i = 0; i < this.accounts.length; i = i + 1) {
      if (this.accounts[i].id === id) {
        this.accounts[i].credit(amount);
      }
    }
  }
  debit(id, amount) {
      console.log("this.accounts",this.accounts)
    for (let i = 0; i < this.accounts.length; i = i + 1) {
      if (this.accounts[i].id === id) {
        this.accounts[i].debit(amount);
      }
    }
  }
  getDetails(id) {
    for (let i = 0; i < this.accounts.length; i = i + 1) {
      if (this.accounts[i].id === id) {
        this.accounts[i].getDetails();
      }
    }
  }
}


class Accounts {
  constructor(name, age, id, balance) {
    this.name = name;
    this.id = id;
    this.balance = balance;
  }
  credit(amount) {
    this.balance = amount + this.balance;
  }
  debit(amount) {
      if(amount>this.balance){
      console.log("amount is greater than balance")
      }else{
      this.balance =  this.balance - amount;
      }
   
  }
  getDetails() {
    console.log("Acc name",this.name);
    console.log("acc id",this.id);
    console.log("acc balance",this.balance);
  }
}

const axisBank = new Bank("Axis");

const createNewAccounts=[{name:"hari",age:20},
{}
]

const forCredit = [{id:2,ammount:20}]


const getDetailsAccs=[{id:8}]

const forDebit=[]

axisBank.create("raj",20)
axisBank.getDetails(1)
axisBank.create("ram",30)
axisBank.getDetails(2)
axisBank.credit(1,100)

axisBank.getDetails(1)

axisBank.debit(1,50)

axisBank.getDetails(1)
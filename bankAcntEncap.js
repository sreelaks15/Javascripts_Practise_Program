class bankAcntEncap {
    #currentBalance  // private data == cant be used directly outside the class 
    constructor(currentBalance, AccountHolderName) {
        this.#currentBalance = currentBalance,
            this.AccountHolderName = AccountHolderName


    }
    deposit(depositAmount) {
        this.#currentBalance = this.#currentBalance + depositAmount
    }
    withdrawal(withdrawalAmount) {
        this.#currentBalance = this.#currentBalance - withdrawalAmount
    }
    showBalance() {
        console.log("Current balance " + " is " + this.#currentBalance);
    }
}
const myBalanceobj = new bankAcntEncap(1000, "Sree")
myBalanceobj.showBalance()
myBalanceobj.deposit(2000)
myBalanceobj.showBalance()
myBalanceobj.withdrawal(500)
myBalanceobj.showBalance()

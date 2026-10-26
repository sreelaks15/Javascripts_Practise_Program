class payment
 {
    constructor(amount)
    {
        this.amount = amount;
    }
    payment()
    {
        console.log(this.amount + " is the payment amount")
    }
}
module.exports = payment
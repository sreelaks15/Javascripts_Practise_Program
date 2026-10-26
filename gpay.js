const payment = require('./payment.js');

class gpay extends payment{
    constructor(amount)
    {
        super()
        this.amount = amount
    }
payment()
{
    console.log("Payment is done using phonePay and the amount is " + this.amount)
}
}
module.exports = gpay
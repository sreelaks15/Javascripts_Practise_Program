const gpay = require('./gpay.js');
const payment = require('./payment.js');

class phonePay extends gpay{
    constructor(amount)
    {
        super()
        this.amount = amount
    }
payment()
{
    console.log("Payment is done using Phonepay and the amount is " + this.amount)
}
}

const newPayment = new payment(1000)
newPayment.payment()

const newgpay = new gpay(2000)
newgpay.payment()

const newphonePay = new phonePay (3000)
newphonePay.payment()


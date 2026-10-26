function displayresult(result) {
    console.log(result);
}
function calculate(a, b, callback) {
    let sum = a + b
    callback(sum)
}
    calculate(10, 20, displayresult)


    // substraction

    function substraction(a,b,callback){
        let sub = a- b ;
        callback(sub)
    
    }
    substraction(50,10,displayresult)
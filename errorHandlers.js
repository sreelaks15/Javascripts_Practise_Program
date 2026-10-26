try {
    let a = 10
    let b = 0
    //let b =5
    if(b === 0){
        throw new Error("Number cannot be divided by zero. Enter another numnber")
    }
    let result = a / b
    console.log(result)
}
catch(error){
console.log(error.message)
}
finally{
console.log("Execution stopped")
}
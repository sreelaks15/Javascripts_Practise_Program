//call back hell or pyramid of doom

/*function displaydata(cb1) {
    console.log("First function executed");
    cb1()
}
function callbackfunction1(cb2) {
    console.log("Callbackfunction1 executed");
    cb2()
}
function endfunction() {
    console.log("function execution stopped");
}

displaydata(function () {
    callbackfunction1(function () {
        endfunction()
    })
})*/

//promise
const displaydata = () => {
    return new Promise((resolve, reject) => {
        console.log("First function executed");
        resolve()
    })
}

const callbackfunction1 = () => {
    return new Promise((resolve, reject) => {
        console.log("Callbackfunction1 executed");
        let pass = false
        if (pass) {
            resolve("completed")
        }
        else {
            reject("not completed")
        }
    })
}

const endfunction = () => {
    return new Promise((resolve, reject) => {
        console.log("function execution stopped");
        resolve()
    })
}
displaydata()
    .then(() => callbackfunction1())
    .then(() => endfunction())
    .then(() => { console.log("All functions executed successfully") })
    .catch((error) => { console.error("The error message is " + error) })


//async await
const paper = () => {
    return new Promise((resolve) => {
        resolve("Hello async await function")
    })
}
const stone =async () => {
    console.log("Function started")
    const sample = await paper()
    console.log(sample)
    console.log("function stopped ")
}
stone()
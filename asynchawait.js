const intro =() => {
    return new Promise((resolve) => {
        resolve("Iam a student")
    })
}
const student =async () => {
    console.log("Hello Iam Sreelakshmi")
    const sample = await intro()
    console.log(sample)
    console.log("Iam learning async await function")
}
student()
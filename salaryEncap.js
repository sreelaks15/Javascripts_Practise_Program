class salaryEncap {
    #currentSalary
    constructor(currentSalary, employeeName) {
        this.#currentSalary = currentSalary
        this.employeeName = employeeName
    }
    showSalary() {
        console.log("Salary of " + this.employeeName + " is " + this.#currentSalary)
    }
    deductSalary(deductAmount) {
        this.#currentSalary = this.#currentSalary - deductAmount
    }
    showDeductedSalary() {
        console.log("Deducted Salary of " + this.employeeName + " is " + this.#currentSalary)
    }
    updateSalary(updateAmount) {
        this.#currentSalary = this.#currentSalary + updateAmount
    }
    showUpdatedSalary() {
        console.log("Updated Salary of " + this.employeeName + " is " + this.#currentSalary)
    }
}
const mySalaryobj = new salaryEncap(50000, "Sree")
mySalaryobj.showSalary()
mySalaryobj.deductSalary(5000)
mySalaryobj.showDeductedSalary()
mySalaryobj.updateSalary(10000)
mySalaryobj.showUpdatedSalary()
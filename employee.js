"use strict";
class employee {
    name;
    ID;
    salary;
    constructor(name, ID, salary) {
        this.name = name;
        this.ID = ID;
        this.salary = salary;
    }
    getDetails() {
        return this.name;
    }
}
const empobj = new employee("Sree", "SP12079", 50000);
console.log(empobj.getDetails());

class employee{
    name : string
    ID : string
    salary : number
    constructor(name : string, ID: string, salary:number){
    this.name = name
    this.ID = ID
    this.salary = salary
}
getDetails(){
    return this.name
}
}
const empobj = new employee("Sree","SP12079", 50000)
console.log(empobj.getDetails())
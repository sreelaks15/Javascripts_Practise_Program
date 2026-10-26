class coffeeMachineAbstraction {
#boiledWater(){
    console.log("Boiling water");
}
#addmilk(){
    console.log("Adding milk");
}
#addSugar(){
    console.log("Adding sugar");
}
#addCoffeePowder(){
    console.log("Adding coffee powder");
}
makeYourCoffee(){
    console.log("Making your coffee");
    this.#boiledWater();
    this.#addmilk();
    this.#addSugar();
    this.#addCoffeePowder();    
}
makeYourCoffeeWithoutSugar(){
    console.log("Making your coffee without sugar");
    this.#boiledWater();
    this.#addmilk();
    this.#addCoffeePowder();
}
}
const myCoffeeMachine = new coffeeMachineAbstraction();
myCoffeeMachine.makeYourCoffee();
myCoffeeMachine.makeYourCoffeeWithoutSugar();
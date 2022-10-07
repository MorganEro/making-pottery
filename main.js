//  Define a function named buyClay. needs no parameters. returns an object with no properties
const buyClay = () => {
    const clayObject = {}
    return clayObject
}
clayObject = buyClay()
//   Define a function named makePottery. pass it the empty object that buyClay produced
const makePottery = (clayObject) => {
    //function should add a new property named shape, and its value should be "Bowl" then return the object after the new property was added.
    clayObject.shape = "Bowl"
    return clayObject

}
//stepTwo = makePottery(clayObject)

//Define a function named bisqueFire. give it the object that makePottery produced

const bisqueFire = (clayObject) => {
    //The function should perform the task of adding a new property named readyForGlazing, and its value should be true.
    clayObject.readyForGlazing = true
    return clayObject
}

//stepThree = bisqueFire(stepTwo)

//   Define a function named glazePottery. You need to give it the object that bisqueFire produced
const glazePottery = (clayObject) => {
    //The function should check if the pottery has been bisque fired already and is ready for glazing. If it has not, you should log the following message to the console.
    if (clayObject.readyForGlazing !== true) {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
        //If the pottery has been bisque fired, the function should perform the task of adding a new property named glazing, and its value should be "Midnight Blue". The function should then return the object after the new property was added
    } else {
        clayObject.glazing = "Midnight Blue"
    }
return clayObject
}

//stepFour = glazePottery(stepThree)

//     Define a function named finalFiring. You need to give it the object that glazePottery produced. It also needs to capture the       temperature of the kiln, so it needs two parameters.

let kilnTemp = " "

const finalFiring = (clayObject, kilnTemp) => {
    //The function should perform the task of adding a new property named cracked, and its value depend on the value of the temperature parameter. If that value is higher than 1200, then the value of the cracked property must be true. If the value is 1200, or less, the value should be false.
    if (kilnTemp > 1200) {
        clayObject.cracked = true
    } else {
        clayObject.cracked = false
    }
    //The function should then return the object after the new property was added.
return clayObject

}
buyClay()
makePottery(clayObject)
bisqueFire(clayObject)
glazePottery(clayObject)
const firedPottery1400 = finalFiring(clayObject, 1400)
console.log(firedPottery1400)














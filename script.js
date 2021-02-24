
let petName = prompt("Name your pet:");
let petHappiness = 0;
let petEnergy = 0;
// console.log(petName, petHappiness, petEnergy);


for (let i = 0; i < 6; i++) {
   let userChoice = prompt("Feed, pet, or walk?");
//    console.log(userChoice);
    if (userChoice.toLowerCase() === "feed") {
        petEnergy += 2;
    } else if (userChoice.toLowerCase() === "pet") {
        petHappiness += 1;
    } else if (userChoice.toLowerCase() === "walk" && petEnergy > 0) {
        petHappiness += 2;
        petEnergy -= 1;
    } else if (userChoice.toLowerCase() === "walk" && petEnergy === 0) {
        alert("Not enough energy to enjoy a walk.");
    }
    
}

console.log (petName + " has " + petHappiness + " happiness and " + petEnergy + " energy.");


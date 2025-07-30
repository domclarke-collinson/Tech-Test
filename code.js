// Sort function

function sortArray(a, b) {
    return b - a
};

// define the arrays (need to pull from test file once created)

const arrayP = [];
const arrayS = [];

function placePeopleInCars(arrayP, arrayS) {

    //add up arrays

    const totalP = arrayP.reduce((acc, val) => acc + val, 0);
    const totalS = arrayS.reduce((acc, val) => acc + val, 0);

    //check for zero error

    if (totalS - totalP < 0) {
    console.log(`TOO MANY PEOPLE, NOT ENOUGH CARS`)
        return `TOO MANY PEOPLE, NOT ENOUGH CARS`;
    }

    //sort arrayS descending
    
    const arraySorder = [...arrayS.sort(sortArray)];
let peoplePlaced = 0;
    let carIndex = 0;
    //loop through
    while (peoplePlaced < totalP && carIndex < arraySorder.length) {
        peoplePlaced += arraySorder[carIndex];
        carIndex++;
    }

    //output the number of cars total needed :)
    console.log(`Total Cars Needed:`, carIndex);
        return carIndex;
}

placePeopleInCars(arrayP, arrayS);

module.exports = placePeopleInCars;


//examples from test doc


//To be Commented out:
// console.log ("People array:", arrayP);
// console.log ("Car array:",arrayS);
// console.log ("People total:",totalP);
// console.log ("Car capacity total:",totalS);
// console.log ("Cars in decending order of seats:", arraySorder);
// console.log (`Total Cars Needed:`, totalCars);
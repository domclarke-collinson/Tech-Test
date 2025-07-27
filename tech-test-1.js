// Sort function - fixed lol

function sortArray(a, b) {
   return b - a
};

// define the arrays (need to pull from test file once created)

const arrayP = [2, 3, 4, 2, 10];
const arrayS = [2, 5, 7, 2];

// calculate the number of people total and number of spaces in the cars

let totalP = 0;
for (let a = 0; a < arrayP.length; a++) {
    totalP = totalP + arrayP[a];
}

let totalS = 0;
for (let a = 0; a < arrayS.length; a++) {
    totalS = totalS + arrayS[a];
}

// check if theres enough seats for all people, if not then stop and output error 

if (totalS - totalP < 0) {
        console.log (`TOO MANY PEOPLE, NOT ENOUGH CARS`)
    }
    else if (totalS - totalP >= 0) {


// sort the car list for capacity from largest to smallest 
// need to adjust the sort function to be largest to smallest

const arraySorder = [...arrayS.sort(sortArray)];


//loop through each value in arraySorder until i= vlaue of each number in array and then move to next value in array, stop when i = total people

let peoplePlaced = 0;
let carIndex = 0;

// fill current car one seat at a time
        // increment peoplePlaced
        // stop if peoplePlaced === totalP
    // move to next car

while (peoplePlaced < totalP && carIndex < arraySorder.length) {
    const seatsPerCar = arraySorder[carIndex];

    for (let seat = 0; seat < seatsPerCar; seat++) {
        if (peoplePlaced === totalP) break;
        peoplePlaced++;
        // console.log(`Person ${peoplePlaced} in car ${carIndex + 1}`);

    }
    carIndex++;
}

//output the number of cars total needed :)

const totalCars = (carIndex);

console.log (`Total Cars Needed:`, totalCars);
        }


//examples from test doc 


//To be Commented out:
// console.log ("People array:", arrayP);
// console.log ("Car array:",arrayS);
// console.log ("People total:",totalP);
// console.log ("Car capacity total:",totalS);
// console.log ("Cars in decending order of seats:", arraySorder);
// console.log (`Total Cars Needed:`, totalCars);
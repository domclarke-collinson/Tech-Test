// Sort function
function sortArray(a, b) {
    return b - a
};

// define the arrays (need to pull from test file once created)
const people = [];
const seats = [];

function placePeopleInCars(people, seats) {
    //add up arrays
    const totalPeople = people.reduce((acc, val) => acc + val, 0);
    const totalSeats = seats.reduce((acc, val) => acc + val, 0);
    //check for zero error
    if (totalSeats - totalPeople < 0) {
        return `Error_not_enough_seats`;
    }

    //return invalid for undefined
    if (people.includes(undefined) || seats.includes(undefined)) {
        return `Invalid input`;
    }

    //return invalid for non-numbers
    if (people.some(isNaN) || seats.some(isNaN)) {
        return `Invalid input`;
    }
    
    //sort seats descending
    const seatsOrder = [...seats.sort(sortArray)];
    let peoplePlaced = 0;
    let carIndex = 0;
    //loop through
    while (peoplePlaced < totalPeople && carIndex < seatsOrder.length) {
        peoplePlaced += seatsOrder[carIndex];
        carIndex++;
    }

    //output the number of cars total needed :)
    console.log(`Total Cars Needed:`, carIndex);
    return carIndex;
}

placePeopleInCars(people, seats);
module.exports = placePeopleInCars;
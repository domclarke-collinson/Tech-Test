const placePeopleInCars = require('./code.js');

describe('placePeopleInCars', () => {
    it('should place people in cars correctly', () => {
        const people = [1, 2, 3, 4, 5];
        const seats = [3, 4, 2, 1, 5, 10];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe(2);
    });
    it('should return 1 when one car can fit all people', () => {
        const people = [2, 2, 2];
        const seats = [10];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe(1);
    });
    it('should return 3 when three cars are needed', () => {
        const people = [2, 2, 2, 2];
        const seats = [3, 3, 3];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe(3);
    });
    it('should return Error if not enough seats', () => {
        const people = [5, 5, 5];
        const seats = [4, 4, 4];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe(`Error_not_enough_seats`);
    });
    it('should return 0 if no people', () => {
        const people = [];
        const seats = [1, 2, 3];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe(0);
    });
    it('should return 0 if no cars and no people', () => {
        const people = [];
        const seats = [];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe(0);
    });
    it('should return "Invalid input" if people array contains undefined', () => {
        const people = [undefined, 2, 2];
        const seats = [4, 4, 4];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe("Invalid input");
    });
    it('should return "Invalid input" if seats array contains undefined', () => {
        const people = [3, 2, 2];
        const seats = [4, 4, undefined];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe("Invalid input");
    });
    it('should return "Invalid input" if people array contains non numbers', () => {
        const people = ["a", 2, 2];
        const seats = [4, 4, 4];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe("Invalid input");
    });
    it('should return "Invalid input" if seats array contains non numbers', () => {
        const people = [2, 2];
        const seats = [4, "b"];

        const result = placePeopleInCars(people, seats);
        expect(result).toBe("Invalid input");
    });
});
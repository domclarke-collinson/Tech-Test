const placePeopleInCars = require('./code.js');

describe('placePeopleInCars', () => {
    it('should place people in cars correctly', () => {
        const arrayP = [1, 2, 3, 4, 5];
        const arrayS = [3, 4, 2, 1, 5, 10];

        const result = placePeopleInCars(arrayP, arrayS);
        expect(result).toBe(2);
    });

    it('should return 1 when one car can fit all people', () => {
        const arrayP = [2, 2, 2];
        const arrayS = [10];

        const result = placePeopleInCars(arrayP, arrayS);
        expect(result).toBe(1);
    });

    it('should return 3 when three cars are needed', () => {
        const arrayP = [2, 2, 2, 2, 2];
        const arrayS = [3, 3, 3];

        const result = placePeopleInCars(arrayP, arrayS);
        expect(result).toBe(3);
    });

    it('should return undefined if not enough seats', () => {
        const arrayP = [5, 5, 5];
        const arrayS = [4, 4, 4];

        const result = placePeopleInCars(arrayP, arrayS);
        expect(result).toBeUndefined();
    });

    it('should return 0 if no people', () => {
        const arrayP = [];
        const arrayS = [1, 2, 3];

        const result = placePeopleInCars(arrayP, arrayS);
        expect(result).toBe(0);
    });

    it('should return 0 if no cars and no people', () => {
        const arrayP = [];
        const arrayS = [];

        const result = placePeopleInCars(arrayP, arrayS);
        expect(result).toBe(0);
    });
});

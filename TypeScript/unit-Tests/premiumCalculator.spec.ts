import { premiumCalculator } from "../../src/Services/premiumCalculator";

describe("Calculates Premium", ()=>{
    it('When function receives 6639 and 5 as input, returns 331.9',()=>{

        //Arrange
        const carValue = 6639;
        const risk = 5;
        const expected = 331.9;

        //Act
        const actual = premiumCalculator(carValue,risk);

        //Assert
        expect(actual).toBe(expected);
    });
});
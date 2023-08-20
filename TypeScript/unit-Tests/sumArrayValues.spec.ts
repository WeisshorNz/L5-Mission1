import { sumArrayValues } from "../../src/Services/sumArrayValues";

describe("Sum of all Values on an Array", ()=>{
    it('When function receives [26, 5, 16, 8, 25, 18], returns 98', ()=>{

        //Arrange
        const myArray = [26, 5, 16, 8, 25, 18];
        const expected = 98;

        //Act
        const actual = sumArrayValues(myArray);

        //Assert
        expect(actual).toBe(expected);
    });
});
import { countKeywords } from "../src/Services/countKeywords";

describe("Counts the number of repetitions of a set of predefined words", ()=>{
    it('When function recives: I crashed my car once and damaged my bumper, returns 2', ()=>{

        //Arrange
        const word = "I only crashed my car once and damaged my bumper";
        const expected = 2;

        //Act
        const actual = countKeywords(word);

        //Assert
        expect(actual).toBe(expected);
    });
});
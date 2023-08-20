import { indexOfAlphabet } from "../../src/Services/indexOfAlphabet";

describe("Index of Car Model", ()=>{
    it('When function receives Zephyr as model, returns[ 26, 5, 16, 8, 25, 18 ]',()=>{

        //Arrange
        const model = "Zephyr";
        const expected = [26, 5, 16, 8, 25, 18];

        //Act
        const actual= indexOfAlphabet(model);

        //Assert
        expect(actual).toEqual(expected);
    });
});
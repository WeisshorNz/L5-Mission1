// Function that takes a car model as string and returns an array of numbers with its corresponding index in the English Alphabet
export function indexOfAlphabet(carModel: string): number[] {
  const romanAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const modelInNumbers: number[] = [];

  for (let i = 0; i < carModel.length; i++) {
    const lowerCaseModel = carModel[i].toLowerCase();
    const position = romanAlphabet.indexOf(lowerCaseModel) + 1;
    if (position >= 1 && position <= 26) {
      modelInNumbers.push(position);
    }
  }

  return modelInNumbers;
}


const express = require("express");
const server = express();
server.use(express.json());


// Function that takes a car model as string and returns an array of numbers with its corresponding index in the English Alphabet
function indexOfAlphabet(carModel) {
  const romanAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const modelInNumbers = [];

  for (let i = 0; i < carModel.length; i++) {
    const lowerCaseModel = carModel[i].toLowerCase();
    const position = romanAlphabet.indexOf(lowerCaseModel) + 1;
    if (position >= 1 && position <= 26) {
      modelInNumbers.push(position);
    }
  }

  return modelInNumbers;
}
// Function that outputs the sum of all values in the modelInNumbers array
function sumArrayValues(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
//function that counts the number of times the words in the keywords array repeat in the input (word)
function countKeywords(word) {
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  const wordArray = word.toLowerCase().split(/\s+/);

  let count = 0;
  for (const keyword of keywords) {
    count += wordArray.filter((w) => w.includes(keyword)).length;
  }

  // Limit the count to a maximum of 5
  count = Math.min(count, 5);

  return count;
}
// function that calculates yearly premium based on car value and risk
function premiumCalculator(value, risk) {
  const premium = Number(((value * risk) / 100).toFixed(1));
  return premium;
}


//  POST endpoint for calculating car value
server.post("/calculate_car_value", (req, res) => {
  try {
    const { model, year } = req.body;

    if (!model || !year || typeof year !== "number" || year <= 0) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const modelNumbers = indexOfAlphabet(model);
    const totalSum = sumArrayValues(modelNumbers);
    car_value = totalSum * 100 + year;

    return res.json({ car_value });
  } catch (error) {
    return res.status(500).json({ error: "There is an error" });
  }
});

//POST endpoint to calculate risk rating
server.post("/calculateRiskRating", (req, res) => {
  try {
    const { claim_history } = req.body;

    if (!claim_history || typeof claim_history !== "string") {
      throw new Error("Invalid input");
    }

    risk_rating = countKeywords(claim_history);
    res.json({ risk_rating });
  } catch (error) {
    res.status(400).json({ error: "There is an error" });
  }
});

//POST endpoint to calculate premiums
server.post("/calculate_premium", (req, res) => {
  try {
    const { car_value, risk_rating } = req.body;
    const yearly_premium = Number(
      premiumCalculator(car_value, risk_rating).toFixed(1)
    );
    const monthly_premium = Number((yearly_premium / 12).toFixed(1));
    res.json({ yearly_premium, monthly_premium });
  } catch (error) {
    res.status(400).json({ error: "There is an error" });
  }
});

// Starting the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, yeah man!`);
});

import { Request, Response } from "express";
import { indexOfAlphabet } from "../Services/indexOfAlphabet";
import { sumArrayValues } from "../Services/sumArrayValues";

// POST endpoint for calculating car value

    export const carValue = (req: Request, res: Response) => {
  try {
    const { model, year } = req.body;

    if (!model || !year || typeof year !== "number" || year <= 0) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const modelNumbers = indexOfAlphabet(model);
    const totalSum = sumArrayValues(modelNumbers);
    const carValue = totalSum * 100 + year;

    return res.json({ car_value: carValue });
  } catch (error) {
    return res.status(500).json({ error: "There is an error" });
  }
};

import { Request, Response } from "express";
import { countKeywords } from "../Services/countkeywords";

//POST endpoint to calculate risk rating

    export const riskRating = (req: Request, res: Response) => {
  try {
    const { claim_history } = req.body;

    if (!claim_history || typeof claim_history !== "string") {
      throw new Error("Invalid input");
    }

    const riskRating = countKeywords(claim_history);
    res.json({ risk_rating: riskRating });
  } catch (error) {
    res.status(400).json({ error: "There is an error" });
  }
};

import { Request, Response } from "express";
import { premiumCalculator } from "../Services/premiumCalculator";

// POST endpoint to calculate premiums

    export const getPremium = (req: Request, res: Response) => {
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
};
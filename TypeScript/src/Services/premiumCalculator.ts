// Function that calculates yearly premium based on car value and risk
export function premiumCalculator(value: number, risk: number): number {
  const premium = Number(((value * risk) / 100).toFixed(1));
  return premium;
}
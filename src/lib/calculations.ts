import type { CalculatorInputs, CalculatorResults } from "@/types/calculator";

/**
 * Core calculation logic for tariff impact calculator
 */
export function calculateTariffImpact(inputs: CalculatorInputs): CalculatorResults {
  const {
    productCost,
    shippingCost,
    insuranceCost,
    handlingCost,
    tariffRate,
    profitMargin,
    totalUnits,
  } = inputs;

  // Calculate total cost per unit
  const tariffAmount = productCost * (tariffRate / 100);
  const totalCostPerUnit = productCost + shippingCost + insuranceCost + handlingCost + tariffAmount;

  // Landed cost is the same as total cost per unit
  const landedCostPerUnit = totalCostPerUnit;

  // Calculate selling price with profit margin
  const recommendedSellingPrice = landedCostPerUnit * (1 + profitMargin / 100);

  // Calculate totals
  const totalInvestment = landedCostPerUnit * totalUnits;
  const totalRevenue = recommendedSellingPrice * totalUnits;
  const totalProfit = totalRevenue - totalInvestment;

  // Verify profit margin
  const actualProfitMargin = totalInvestment > 0 ? (totalProfit / totalInvestment) * 100 : 0;

  return {
    totalCostPerUnit,
    landedCostPerUnit,
    recommendedSellingPrice,
    totalInvestment,
    totalRevenue,
    totalProfit,
    actualProfitMargin,
  };
}

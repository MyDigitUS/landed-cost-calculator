export interface CalculatorInputs {
  productCost: number;
  shippingCost: number;
  insuranceCost: number;
  handlingCost: number;
  tariffRate: number;
  profitMargin: number;
  totalUnits: number;
}

export interface CalculatorResults {
  totalCostPerUnit: number;
  landedCostPerUnit: number;
  recommendedSellingPrice: number;
  totalInvestment: number;
  totalRevenue: number;
  totalProfit: number;
  actualProfitMargin: number;
}

export type CalculatorFormData = CalculatorInputs;

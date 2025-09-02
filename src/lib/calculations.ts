import type { CalculatorFormData, CalculatorInputs, CalculatorResults, TariffInfo } from "@/types/calculator";

import { DEMO_TARIFF_RATES } from "@/data/tariff-rates";

/**
 * Convert form data to calculation inputs
 */
export function parseFormData(formData: CalculatorFormData): CalculatorInputs {
  return {
    productCost: parseFloat(formData.productCost) || 0,
    shippingCost: parseFloat(formData.shippingCost) || 0,
    insuranceCost: parseFloat(formData.insuranceCost) || 0,
    additionalFees: parseFloat(formData.additionalFees) || 0,
    quantity: parseInt(formData.quantity) || 1,
    unitWeight: parseFloat(formData.unitWeight) || 0,
    originCountry: formData.originCountry,
    destinationCountry: formData.destinationCountry,
    productCategory: formData.productCategory,
    hsCode: formData.hsCode || undefined
  };
}

/**
 * Get tariff rate for country pair and product category
 */
export function getTariffRate(originCountry: string, destinationCountry: string, productCategory: string): TariffInfo {
  const countryPair = `${originCountry}-${destinationCountry}`;
  
  // Try specific country pair first
  if (DEMO_TARIFF_RATES[countryPair] && DEMO_TARIFF_RATES[countryPair][productCategory]) {
    return DEMO_TARIFF_RATES[countryPair][productCategory];
  }
  
  // Fall back to general rates
  const fallbackPair = `Other-${destinationCountry}`;
  if (DEMO_TARIFF_RATES[fallbackPair] && DEMO_TARIFF_RATES[fallbackPair][productCategory]) {
    return DEMO_TARIFF_RATES[fallbackPair][productCategory];
  }
  
  // Ultimate fallback
  return { rate: 10, description: "Standard tariff rate" };
}

/**
 * Calculate landed cost with tariff impact
 */
export function calculateLandedCostFromInputs(inputs: CalculatorInputs): CalculatorResults {
  const {
    productCost,
    shippingCost,
    insuranceCost,
    additionalFees,
    quantity,
    originCountry,
    destinationCountry,
    productCategory
  } = inputs;

  // Get applicable tariff rate
  const tariffInfo = getTariffRate(originCountry, destinationCountry, productCategory);
  const tariffRate = tariffInfo.rate;

  // Calculate per-unit costs
  const shippingPerUnit = shippingCost / quantity;
  const insurancePerUnit = insuranceCost / quantity;
  const additionalFeesPerUnit = additionalFees / quantity;

  // Dutiable value = product cost + shipping + insurance (standard customs valuation)
  const dutiableValue = productCost + shippingPerUnit + insurancePerUnit;
  
  // Calculate tariff amount
  const tariffAmount = dutiableValue * (tariffRate / 100);
  
  // Total landed cost per unit
  const landedCostPerUnit = productCost + shippingPerUnit + insurancePerUnit + tariffAmount + additionalFeesPerUnit;
  
  // Total landed cost for all units
  const totalLandedCost = landedCostPerUnit * quantity;

  // Cost breakdown for visualization
  const costBreakdown = {
    product: productCost,
    shipping: shippingPerUnit,
    insurance: insurancePerUnit,
    tariff: tariffAmount,
    additionalFees: additionalFeesPerUnit
  };

  // Calculate percentages
  const totalCost = landedCostPerUnit;
  const costPercentages = {
    product: (productCost / totalCost) * 100,
    shipping: (shippingPerUnit / totalCost) * 100,
    insurance: (insurancePerUnit / totalCost) * 100,
    tariff: (tariffAmount / totalCost) * 100,
    additionalFees: (additionalFeesPerUnit / totalCost) * 100
  };

  return {
    productCost,
    shippingCost: shippingPerUnit,
    insuranceCost: insurancePerUnit,
    additionalFees: additionalFeesPerUnit,
    dutiableValue,
    tariffRate,
    tariffAmount,
    landedCostPerUnit,
    totalLandedCost,
    costBreakdown,
    costPercentages
  };
}

/**
 * Main calculation function that combines parsing and calculation
 */
export function calculateLandedCost(formData: CalculatorFormData): CalculatorResults {
  const inputs = parseFormData(formData);
  return calculateLandedCostFromInputs(inputs);
}

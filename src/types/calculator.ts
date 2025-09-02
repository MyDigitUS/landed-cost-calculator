export interface CalculatorFormData {
  // Product Information
  productName: string;
  productCost: string;
  hsCode: string;
  productCategory: string;
  
  // Origin & Destination
  originCountry: string;
  destinationCountry: string;
  
  // Shipping Information
  shippingMethod: string;
  shippingCost: string;
  insuranceCost: string;
  
  // Quantity & Weight
  quantity: string;
  unitWeight: string;
  
  // Additional Costs
  additionalFees: string;
}

export interface CalculatorInputs {
  productCost: number;
  shippingCost: number;
  insuranceCost: number;
  additionalFees: number;
  quantity: number;
  unitWeight: number;
  originCountry: string;
  destinationCountry: string;
  productCategory: string;
  hsCode?: string;
}

export interface TariffInfo {
  rate: number;
  description: string;
  hsCode?: string;
  effectiveDate?: string;
}

export interface CalculatorResults {
  // Base costs
  productCost: number;
  shippingCost: number;
  insuranceCost: number;
  additionalFees: number;
  
  // Tariff calculations
  dutiableValue: number;
  tariffRate: number;
  tariffAmount: number;
  
  // Final calculations
  landedCostPerUnit: number;
  totalLandedCost: number;
  
  // Cost breakdown
  costBreakdown: {
    product: number;
    shipping: number;
    insurance: number;
    tariff: number;
    additionalFees: number;
  };
  
  // Percentages for visualization
  costPercentages: {
    product: number;
    shipping: number;
    insurance: number;
    tariff: number;
    additionalFees: number;
  };
}

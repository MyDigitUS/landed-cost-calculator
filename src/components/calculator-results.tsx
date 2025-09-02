"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, DollarSign, Package, Truck, Shield, AlertTriangle } from "lucide-react";
import type { CalculatorResults } from "@/types/calculator";

interface CalculatorResultsProps {
  results: CalculatorResults;
  productName: string;
  quantity: number;
  originCountry: string;
  destinationCountry: string;
}

export function CalculatorResults({ 
  results, 
  productName, 
  quantity, 
  originCountry, 
  destinationCountry 
}: CalculatorResultsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(1)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl flex items-center justify-center gap-2">
            <TrendingUp className="h-8 w-8 text-green-600" />
            Landed Cost Analysis
          </CardTitle>
          <CardDescription className="text-lg">
            {productName} • {quantity} units • {originCountry} → {destinationCountry}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Package className="h-4 w-4" />
              Per Unit Cost
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(results.landedCostPerUnit)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Including all fees and tariffs
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Total Investment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(results.totalLandedCost)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              For {quantity} units
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Tariff Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {formatCurrency(results.tariffAmount)}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="destructive" className="text-xs">
                {formatPercentage(results.tariffRate)}
              </Badge>
              <span className="text-xs text-muted-foreground">per unit</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Cost Breakdown</CardTitle>
          <CardDescription>
            Detailed breakdown of all costs per unit
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Product Cost */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium flex items-center gap-2">
                <Package className="h-4 w-4" />
                Product Cost
              </span>
              <span className="font-semibold">{formatCurrency(results.productCost)}</span>
            </div>
            <Progress value={results.costPercentages.product} className="h-2" />
            <div className="text-xs text-muted-foreground text-right">
              {formatPercentage(results.costPercentages.product)} of total
            </div>
          </div>

          <Separator />

          {/* Shipping Cost */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Shipping (per unit)
              </span>
              <span className="font-semibold">{formatCurrency(results.shippingCost)}</span>
            </div>
            <Progress value={results.costPercentages.shipping} className="h-2" />
            <div className="text-xs text-muted-foreground text-right">
              {formatPercentage(results.costPercentages.shipping)} of total
            </div>
          </div>

          <Separator />

          {/* Insurance */}
          {results.insuranceCost > 0 && (
            <>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Insurance (per unit)
                  </span>
                  <span className="font-semibold">{formatCurrency(results.insuranceCost)}</span>
                </div>
                <Progress value={results.costPercentages.insurance} className="h-2" />
                <div className="text-xs text-muted-foreground text-right">
                  {formatPercentage(results.costPercentages.insurance)} of total
                </div>
              </div>
              <Separator />
            </>
          )}

          {/* Tariff */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                Tariff ({formatPercentage(results.tariffRate)})
              </span>
              <span className="font-semibold text-red-600">{formatCurrency(results.tariffAmount)}</span>
            </div>
            <Progress value={results.costPercentages.tariff} className="h-2" />
            <div className="text-xs text-muted-foreground text-right">
              {formatPercentage(results.costPercentages.tariff)} of total
            </div>
          </div>

          <Separator />

          {/* Additional Fees */}
          {results.additionalFees > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Additional Fees (per unit)</span>
                <span className="font-semibold">{formatCurrency(results.additionalFees)}</span>
              </div>
              <Progress value={results.costPercentages.additionalFees} className="h-2" />
              <div className="text-xs text-muted-foreground text-right">
                {formatPercentage(results.costPercentages.additionalFees)} of total
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Summary & Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Dutiable Value</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Value used for tariff calculation (Product + Shipping + Insurance)
              </p>
              <div className="text-lg font-bold">{formatCurrency(results.dutiableValue)}</div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Tariff Analysis</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Impact of tariffs on your total costs
              </p>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm">Tariff Rate:</span>
                  <Badge variant="destructive">{formatPercentage(results.tariffRate)}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Tariff Cost:</span>
                  <span className="font-semibold text-red-600">
                    {formatCurrency(results.tariffAmount * quantity)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Key Takeaways
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>
                • Your landed cost is <strong className="text-foreground">{formatCurrency(results.landedCostPerUnit)}</strong> per unit
                ({formatPercentage((results.landedCostPerUnit - results.productCost) / results.productCost * 100)} markup from base cost)
              </li>
              <li>
                • Tariffs account for <strong className="text-foreground">{formatPercentage(results.costPercentages.tariff)}</strong> of your total cost
              </li>
              <li>
                • Total investment needed: <strong className="text-foreground">{formatCurrency(results.totalLandedCost)}</strong>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
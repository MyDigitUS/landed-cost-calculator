"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CalculatorResults } from "@/components/calculator-results";
import { calculateLandedCost } from "@/lib/calculations";
import type { CalculatorFormData, CalculatorResults as CalculatorResultsType } from "@/types/calculator";

const PRODUCT_CATEGORIES = [
  "Electronics",
  "Clothing & Textiles", 
  "Home & Garden",
  "Sports & Outdoors",
  "Health & Beauty",
  "Automotive",
  "Industrial",
  "Food & Beverages",
  "Other"
];

const COUNTRIES = [
  "China",
  "United States",
  "Germany", 
  "Vietnam",
  "India",
  "Mexico",
  "Canada",
  "United Kingdom",
  "Other"
];

const SHIPPING_METHODS = [
  "Sea Freight (FCL)",
  "Sea Freight (LCL)", 
  "Air Freight",
  "Express (DHL/FedEx)",
  "Ground/Truck"
];

export function CalculatorForm() {
  const [formData, setFormData] = useState<CalculatorFormData>({
    productName: "",
    productCost: "",
    hsCode: "",
    productCategory: "",
    originCountry: "",
    destinationCountry: "",
    shippingMethod: "",
    shippingCost: "",
    insuranceCost: "",
    quantity: "",
    unitWeight: "",
    additionalFees: ""
  });
  
  const [results, setResults] = useState<CalculatorResultsType | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof CalculatorFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    try {
      // Validate required fields
      if (!formData.productName || !formData.productCost || !formData.quantity || 
          !formData.originCountry || !formData.destinationCountry || 
          !formData.productCategory || !formData.shippingCost) {
        alert("Please fill in all required fields");
        return;
      }

      // Calculate results
      const calculatedResults = calculateLandedCost(formData);
      setResults(calculatedResults);
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
      
    } catch (error) {
      console.error("Calculation error:", error);
      alert("Error calculating results. Please check your inputs.");
    } finally {
      setIsCalculating(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setFormData({
      productName: "",
      productCost: "",
      hsCode: "",
      productCategory: "",
      originCountry: "",
      destinationCountry: "",
      shippingMethod: "",
      shippingCost: "",
      insuranceCost: "",
      quantity: "",
      unitWeight: "",
      additionalFees: ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Step 1: Product Information */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <CardTitle>Product Information</CardTitle>
                <CardDescription>
                  Tell us about the product you're importing
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  id="productName"
                  placeholder="e.g., Wireless Bluetooth Headphones"
                  value={formData.productName}
                  onChange={(e) => handleInputChange("productName", e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="productCost">Product Cost (USD)</Label>
                <Input
                  id="productCost"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.productCost}
                  onChange={(e) => handleInputChange("productCost", e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="productCategory">Product Category</Label>
                <Select
                  value={formData.productCategory}
                  onValueChange={(value) => handleInputChange("productCategory", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRODUCT_CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hsCode">HS Code (Optional)</Label>
                <Input
                  id="hsCode"
                  placeholder="e.g., 8518.30.00"
                  value={formData.hsCode}
                  onChange={(e) => handleInputChange("hsCode", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Harmonized System code for accurate tariff calculation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Origin & Destination */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <CardTitle>Origin & Destination</CardTitle>
                <CardDescription>
                  Where is your product coming from and going to?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="originCountry">Origin Country</Label>
                <Select
                  value={formData.originCountry}
                  onValueChange={(value) => handleInputChange("originCountry", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select origin country" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="destinationCountry">Destination Country</Label>
                <Select
                  value={formData.destinationCountry}
                  onValueChange={(value) => handleInputChange("destinationCountry", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select destination country" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Shipping & Additional Costs */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <CardTitle>Shipping & Additional Costs</CardTitle>
                <CardDescription>
                  Import details and additional costs
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="shippingMethod">Shipping Method</Label>
                <Select
                  value={formData.shippingMethod}
                  onValueChange={(value) => handleInputChange("shippingMethod", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select shipping method" />
                  </SelectTrigger>
                  <SelectContent>
                    {SHIPPING_METHODS.map((method) => (
                      <SelectItem key={method} value={method}>
                        {method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="shippingCost">Shipping Cost (USD)</Label>
                <Input
                  id="shippingCost"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.shippingCost}
                  onChange={(e) => handleInputChange("shippingCost", e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="1"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange("quantity", e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="unitWeight">Unit Weight (kg)</Label>
                <Input
                  id="unitWeight"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.unitWeight}
                  onChange={(e) => handleInputChange("unitWeight", e.target.value)}
                />
              </div>
            </div>
            
            <Separator />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="insuranceCost">Insurance Cost (USD)</Label>
                <Input
                  id="insuranceCost"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.insuranceCost}
                  onChange={(e) => handleInputChange("insuranceCost", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="additionalFees">Additional Fees (USD)</Label>
                <Input
                  id="additionalFees"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.additionalFees}
                  onChange={(e) => handleInputChange("additionalFees", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Broker fees, customs processing, etc.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="text-center space-y-4">
          <Button 
            type="submit" 
            size="lg" 
            className="text-lg px-8 py-6"
            disabled={isCalculating}
          >
            {isCalculating ? "Calculating..." : "Calculate Landed Cost"}
          </Button>
          
          {results && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleReset}
              className="ml-4"
            >
              New Calculation
            </Button>
          )}
        </div>
      </form>

      {/* Results Section */}
      {results && (
        <div id="results" className="mt-12">
          <CalculatorResults
            results={results}
            productName={formData.productName}
            quantity={parseInt(formData.quantity)}
            originCountry={formData.originCountry}
            destinationCountry={formData.destinationCountry}
          />
        </div>
      )}
    </div>
  );
}
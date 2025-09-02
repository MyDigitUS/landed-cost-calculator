import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, Shield, Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Calculator className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Landed Cost Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Instantly calculate how tariffs will impact your product costs. 
              Get precise landed cost calculations for smarter pricing decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/calculator">Calculate Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why E-commerce Store Owners Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make informed pricing decisions with accurate tariff calculations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Instant Results</CardTitle>
                <CardDescription>
                  Get tariff calculations in seconds, not hours of research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No more waiting for quotes or complex spreadsheets. 
                  Enter your product details and get immediate calculations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Accurate Pricing</CardTitle>
                <CardDescription>
                  Make profitable decisions with precise landed cost data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Factor in all costs including tariffs, shipping, and fees 
                  to set competitive yet profitable prices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Risk Management</CardTitle>
                <CardDescription>
                  Understand your exposure to tariff changes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Scenario planning tools help you prepare for policy changes 
                  and protect your margins.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Preview Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Calculate your landed costs in minutes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Enter Product Details</h3>
                <p className="text-muted-foreground">
                  Product cost, origin country, and category
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Add Import Details</h3>
                <p className="text-muted-foreground">
                  Destination, shipping method, and quantities
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Results</h3>
                <p className="text-muted-foreground">
                  Complete landed cost breakdown and analysis
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/calculator">Start Your Calculation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <p className="text-muted-foreground">
              © 2025 Landed Cost Calculator. Built for e-commerce success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

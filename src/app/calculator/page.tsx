import { CalculatorForm } from "@/components/calculator-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Landed Cost Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate your landed costs in 3 simple steps
            </p>
          </div>
        </div>

        {/* Calculator Form */}
        <CalculatorForm />
      </div>
    </div>
  );
}
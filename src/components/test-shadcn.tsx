import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SupabaseTest } from "@/components/supabase-test";

export function TestShadcnComponents() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Phase 1 Foundation Tests</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Shadcn/ui Components</CardTitle>
            <CardDescription>Testing UI component library</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="test-input">Test Input</Label>
              <Input id="test-input" placeholder="Enter some text..." />
            </div>
            <Button className="w-full">Test Button</Button>
          </CardContent>
        </Card>

        <SupabaseTest />
      </div>
    </div>
  );
}
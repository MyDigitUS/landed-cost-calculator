import { TestShadcnComponents } from "@/components/test-shadcn";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Tariff Impact Calculator</h1>
          <p className="text-xl text-muted-foreground">
            Phase 1 Complete: Modern Foundation with Next.js 15 + Tailwind CSS + Shadcn/ui
          </p>
        </div>
        <TestShadcnComponents />
      </main>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Built with Next.js 15 and optimized for speed with dynamic imports and bundle analysis.",
  },
  {
    icon: Shield,
    title: "Type Safe",
    description: "Strict TypeScript configuration to prevent bugs and ensure code quality.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Ready",
    description: "Pre-built dashboard components with Zustand state management and TanStack Query.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Next.js Dashboard
              <span className="text-primary"> Boilerplate</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A scalable, production-ready dashboard boilerplate built with Next.js 15, 
              TypeScript, TailwindCSS, and modern best practices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/dashboard">
                View Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">
                Sign In
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to get started?</CardTitle>
              <CardDescription>
                This boilerplate includes everything you need to build a scalable dashboard application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  ✅ TypeScript with strict configuration<br />
                  ✅ TailwindCSS with custom design system<br />
                  ✅ Zustand for state management<br />
                  ✅ TanStack Query for API state<br />
                  ✅ Error boundaries and providers<br />
                  ✅ Performance optimizations
                </div>
                <Button asChild>
                  <Link href="/dashboard">
                    Explore Dashboard
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
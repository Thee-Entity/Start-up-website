"use client"

import { useState } from 'react';
import { industrySolutionsMatcher, type IndustrySolutionsOutput } from '@/ai/flows/industry-solutions-matcher';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from 'lucide-react';

const industries = ["SMEs", "Institutions", "Schools", "Enterprises"];

export function IndustrySolutions() {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [solution, setSolution] = useState<IndustrySolutionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleIndustryChange = async (industry: string) => {
    setSelectedIndustry(industry);
    if (!industry) {
      setSolution(null);
      return;
    }
    setIsLoading(true);
    setSolution(null);
    try {
      const result = await industrySolutionsMatcher({ industry });
      setSolution(result);
    } catch (error) {
      console.error("Error fetching industry solution:", error);
      setSolution({ solutions: "We're sorry, but we couldn't fetch a recommendation at this time. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <p className="text-center text-muted-foreground">
        Select an industry to see how Thee Entity can help you gain a market advantage.
      </p>
      <Select onValueChange={handleIndustryChange} value={selectedIndustry}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an industry..." />
        </SelectTrigger>
        <SelectContent>
          {industries.map((industry) => (
            <SelectItem key={industry} value={industry}>
              {industry}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="min-h-[8rem] flex items-center justify-center">
        {isLoading ? (
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        ) : solution ? (
          <Card className="w-full bg-secondary/50">
            <CardContent className="p-6">
              <p className="text-center text-lg font-medium text-secondary-foreground">
                {solution.solutions}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center text-muted-foreground">
             <p className="font-bold">Examples:</p>
            <p><strong>Schools:</strong> AI-driven attendance, grading automation, and digital platforms.</p>
            <p><strong>SMEs:</strong> Sales automation, AI chat support, and analytics dashboards.</p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function RiskIndicator() {
  const [riskLevel, setRiskLevel] = useState(65);

  const getRiskColor = (level: number) => {
    if (level < 30) return "bg-green-500";
    if (level < 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getRiskText = (level: number) => {
    if (level < 30) return "Low Risk";
    if (level < 70) return "Medium Risk";
    return "High Risk";
  };

  const getRiskTextColor = (level: number) => {
    if (level < 30) return "text-green-500";
    if (level < 70) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Risk Level Indicator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">{riskLevel}%</span>
            <span className={cn("font-medium", getRiskTextColor(riskLevel))}>
              {getRiskText(riskLevel)}
            </span>
          </div>
          <Progress value={riskLevel} className={cn("h-2", getRiskColor(riskLevel))} />
          <div className="pt-4">
            <Slider
              value={[riskLevel]}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setRiskLevel(value[0])}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Low Risk</span>
            <span>Medium Risk</span>
            <span>High Risk</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
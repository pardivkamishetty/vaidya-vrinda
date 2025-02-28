"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: React.ReactNode;
  chartData?: Array<{ value: number }>;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon,
  chartData,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p 
            className={cn(
              "text-xs text-muted-foreground",
              trend === "up" && "text-green-500",
              trend === "down" && "text-red-500"
            )}
          >
            {description}
          </p>
        )}
        {chartData && (
          <div className="h-10 mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="text-xs">{payload[0].value}</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={
                    trend === "up" 
                      ? "hsl(var(--chart-1))" 
                      : trend === "down" 
                      ? "hsl(var(--chart-3))" 
                      : "hsl(var(--chart-2))"
                  }
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
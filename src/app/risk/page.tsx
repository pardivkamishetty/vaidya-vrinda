"use client";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Footer } from "@/components/dashboard/footer";
import { RiskIndicator } from "@/components/dashboard/risk-indicator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

// Sample risk data
const riskDistributionData = [
  { age: "40-49", lowRisk: 45, mediumRisk: 20, highRisk: 5 },
  { age: "50-59", lowRisk: 40, mediumRisk: 30, highRisk: 15 },
  { age: "60-69", lowRisk: 30, mediumRisk: 35, highRisk: 25 },
  { age: "70-79", lowRisk: 20, mediumRisk: 30, highRisk: 40 },
  { age: "80+", lowRisk: 15, mediumRisk: 25, highRisk: 50 },
];

export default function RiskPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 p-6 md:p-8">
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold tracking-tight">Risk Assessment</h2>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-1">
                  <RiskIndicator />
                </div>
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Risk Distribution by Age Group</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={riskDistributionData}>
                            <XAxis dataKey="age" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="lowRisk" name="Low Risk" fill="hsl(var(--chart-2))" />
                            <Bar dataKey="mediumRisk" name="Medium Risk" fill="hsl(var(--chart-4))" />
                            <Bar dataKey="highRisk" name="High Risk" fill="hsl(var(--chart-1))" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Risk Factors Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="font-medium mb-2">Smoking History</h4>
                        <p className="text-sm text-muted-foreground">
                          Patients with a smoking history of 20+ pack-years show a 65% higher risk of developing lung cancer.
                        </p>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="font-medium mb-2">Family History</h4>
                        <p className="text-sm text-muted-foreground">
                          Patients with first-degree relatives diagnosed with lung cancer show a 30% increased risk.
                        </p>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="font-medium mb-2">Environmental Exposure</h4>
                        <p className="text-sm text-muted-foreground">
                          Occupational exposure to carcinogens increases risk by 45% in the current patient population.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Preventive Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="font-medium mb-2">Screening Frequency</h4>
                        <p className="text-sm text-muted-foreground">
                          High-risk patients should undergo low-dose CT screening every 6 months.
                        </p>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="font-medium mb-2">Lifestyle Modifications</h4>
                        <p className="text-sm text-muted-foreground">
                          Smoking cessation programs show a 20% reduction in cancer progression for early-stage patients.
                        </p>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="font-medium mb-2">Follow-up Protocol</h4>
                        <p className="text-sm text-muted-foreground">
                          Patients with nodules > 8mm should receive follow-up imaging within 30-60 days.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
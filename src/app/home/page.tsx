"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const scanData = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 150 },
  { name: "Mar", value: 180 },
  { name: "Apr", value: 220 },
  { name: "May", value: 260 },
  { name: "Jun", value: 310 },
];

export default function LungCancerDashboard() {
  const [riskLevel, setRiskLevel] = useState(50);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Lung Cancer Detection Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Scans Card */}
          <Card className="bg-gray-900">
            <CardHeader>
              <CardTitle className="text-green-400">Total CT Scans Processed</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-green-400 text-2xl font-bold">1,450</h2>
              <p className="text-green-400">+15% from last month</p>
              <ResponsiveContainer width="100%" height={50}>
                <LineChart data={scanData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="white" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* High-Risk Detections */}
          <Card className="bg-gray-900">
            <CardHeader>
              <CardTitle>High-Risk Detections</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-2xl font-bold">320</h2>
              <p className="text-red-400">+25% from last month</p>
              <Progress value={75} className="mt-3 bg-gray-800" />
            </CardContent>
          </Card>

          {/* Calendar */}
          <Card className="bg-gray-900">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar />
            </CardContent>
          </Card>

          {/* AI Analysis Chat */}
          <Card className="bg-gray-900 col-span-2">
            <CardHeader>
              <CardTitle>AI Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">AI Model:</span> 
                  <p>Detected abnormalities in 18% of scans</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white">You:</span> 
                  <p>How severe are the cases?</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">AI Model:</span> 
                  <p>42% are categorized as high risk</p>
                </div>
              </div>
              <input type="text" placeholder="Ask AI..." className="w-full mt-3 p-2 bg-gray-800 rounded-md text-white" />
            </CardContent>
          </Card>

          {/* Risk Level Card */}
          <Card className="bg-gray-900">
            <CardHeader>
              <CardTitle>Risk Level</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h2 className="text-3xl font-bold">{riskLevel}%</h2>
              <p>Prediction accuracy</p>
              <div className="flex justify-center space-x-3 mt-3">
                <Button onClick={() => setRiskLevel(riskLevel - 5)}>-</Button>
                <Button onClick={() => setRiskLevel(riskLevel + 5)}>+</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

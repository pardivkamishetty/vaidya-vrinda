"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Patient = {
  id: string;
  name: string;
  age: number;
  date: string;
  status: "Low Risk" | "Medium Risk" | "High Risk";
  scanId: string;
};

const patients: Patient[] = [
  {
    id: "P-1001",
    name: "John Smith",
    age: 65,
    date: "2025-04-10",
    status: "Low Risk",
    scanId: "CT-10045",
  },
  {
    id: "P-1002",
    name: "Maria Garcia",
    age: 58,
    date: "2025-04-09",
    status: "High Risk",
    scanId: "CT-10046",
  },
  {
    id: "P-1003",
    name: "Robert Johnson",
    age: 72,
    date: "2025-04-08",
    status: "Medium Risk",
    scanId: "CT-10047",
  },
  {
    id: "P-1004",
    name: "Emily Chen",
    age: 49,
    date: "2025-04-07",
    status: "Low Risk",
    scanId: "CT-10048",
  },
  {
    id: "P-1005",
    name: "James Wilson",
    age: 67,
    date: "2025-04-06",
    status: "High Risk",
    scanId: "CT-10049",
  },
];

export function PatientTable() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Low Risk":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "Medium Risk":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "High Risk":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      default:
        return "";
    }
  };

  const handleViewScan = (patient: Patient) => {
    setSelectedPatient(patient);
    setDialogOpen(true);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Scan Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell className="font-medium">{patient.id}</TableCell>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.date}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(patient.status)}>
                  {patient.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewScan(patient)}
                  >
                    <Eye className="h-3.5 w-3.5 mr-1" />
                    View Scan
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-3.5 w-3.5 mr-1" />
                    Report
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>CT Scan: {selectedPatient?.scanId}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{selectedPatient?.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ID: {selectedPatient?.id} | Age: {selectedPatient?.age}
                  </p>
                </div>
                <Badge className={getStatusColor(selectedPatient?.status || "")}>
                  {selectedPatient?.status}
                </Badge>
              </div>
            </div>
            <div className="aspect-video rounded-lg border bg-card flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                alt="CT Scan" 
                className="max-h-full rounded-lg"
              />
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">
                The AI model has detected abnormal tissue in the right upper lobe with 87% confidence. 
                The pattern is consistent with early-stage adenocarcinoma. Recommend further investigation 
                and follow-up with the patient.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
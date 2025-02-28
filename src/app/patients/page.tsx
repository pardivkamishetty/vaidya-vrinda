import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Footer } from "@/components/dashboard/footer";
import { PatientTable } from "@/components/dashboard/patient-table";

export default function PatientsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 p-6 md:p-8">
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold tracking-tight">Patient Data & Reports</h2>
              
              <div className="rounded-xl border bg-card">
                <div className="p-6">
                  <h3 className="text-lg font-medium">Patient Records</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive patient data and scan history
                  </p>
                </div>
                <PatientTable />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
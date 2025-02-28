import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "@/components/dashboard/header";
import { Footer } from "@/components/dashboard/footer";
import { AIInsights } from "@/components/dashboard/ai-insights";
import { ScanViewer } from "@/components/dashboard/scan-viewer";

export default function AnalysisPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 p-6 md:p-8">
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold tracking-tight">AI Scan Analysis</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="text-lg font-medium mb-4">AI Analysis Tools</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Leverage our AI models to analyze CT scans and detect potential abnormalities
                  </p>
                  <AIInsights />
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="text-lg font-medium mb-4">Scan Visualization</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    View and analyze patient scans with advanced visualization tools
                  </p>
                  <ScanViewer />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
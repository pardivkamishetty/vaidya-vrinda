export function Footer() {
  return (
    <footer className="border-t bg-card py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © 2025 Lung Cancer Detection System. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Version 2.5.0</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
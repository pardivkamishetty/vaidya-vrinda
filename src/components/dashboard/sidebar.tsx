"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Brain, 
  AlertTriangle, 
  Settings, 
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const navItems = [
  {
    name: "Dashboard Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Patient Data & Reports",
    href: "/patients",
    icon: Users,
  },
  {
    name: "AI Scan Analysis",
    href: "/analysis",
    icon: Brain,
  },
  {
    name: "Risk Assessment",
    href: "/risk",
    icon: AlertTriangle,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col border-r bg-card">
      <div className="p-6">
        <h2 className="text-xl font-semibold tracking-tight">
          Lung Cancer Detection
        </h2>
        <p className="text-sm text-muted-foreground">
          Healthcare Dashboard
        </p>
      </div>
      <Separator />
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <Separator />
      <div className="p-4">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Dr. Sarah Chen</p>
            <p className="text-xs text-muted-foreground">Oncologist</p>
          </div>
          <Button variant="ghost" size="icon">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
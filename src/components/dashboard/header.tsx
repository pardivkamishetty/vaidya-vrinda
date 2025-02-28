"use client";

import { Bell } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-card px-6">
      <div className="flex-1">
        <h1 className="text-xl font-semibold">Lung Cancer Detection Dashboard</h1>
      </div>
      <div className="flex flex-1 items-center gap-4 md:justify-end">
        <div className="relative md:w-60">
          <Input
            placeholder="Search patients..."
            className="w-full rounded-full bg-background"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative rounded-full">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -right-1 -top-1 h-4 w-4 rounded-full p-0 text-[10px]">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start gap-1">
              <p className="font-medium">New high-risk patient detected</p>
              <p className="text-xs text-muted-foreground">2 minutes ago</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start gap-1">
              <p className="font-medium">AI analysis complete for 5 patients</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start gap-1">
              <p className="font-medium">System update available</p>
              <p className="text-xs text-muted-foreground">Yesterday</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
      </div>
    </header>
  );
}
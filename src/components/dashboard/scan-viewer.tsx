"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, ZoomIn, ZoomOut, RotateCw } from "lucide-react";

export function ScanViewer() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">CT Scan Viewer</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="h-3.5 w-3.5 mr-1" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <Tabs defaultValue="axial" className="h-full flex flex-col">
          <div className="px-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="axial">Axial View</TabsTrigger>
              <TabsTrigger value="coronal">Coronal View</TabsTrigger>
              <TabsTrigger value="sagittal">Sagittal View</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="axial" className="flex-1 m-0 p-0">
            <div className="relative h-full flex items-center justify-center bg-black/5 dark:bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                alt="Axial CT Scan" 
                className="max-h-full object-contain"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="coronal" className="flex-1 m-0 p-0">
            <div className="relative h-full flex items-center justify-center bg-black/5 dark:bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2070&auto=format&fit=crop" 
                alt="Coronal CT Scan" 
                className="max-h-full object-contain"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sagittal" className="flex-1 m-0 p-0">
            <div className="relative h-full flex items-center justify-center bg-black/5 dark:bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?q=80&w=2070&auto=format&fit=crop" 
                alt="Sagittal CT Scan" 
                className="max-h-full object-contain"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "@/components/dashboard/header";
import { Footer } from "@/components/dashboard/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 p-6 md:p-8">
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
              
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="appearance">Appearance</TabsTrigger>
                  <TabsTrigger value="system">System</TabsTrigger>
                </TabsList>
                
                <TabsContent value="account" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" defaultValue="Sarah" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" defaultValue="Chen" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="sarah.chen@hospital.org" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title">Professional Title</Label>
                          <Input id="title" defaultValue="Oncologist" />
                        </div>
                      </div>
                      <Button>Save Changes</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="notifications" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">High-Risk Patient Alerts</p>
                            <p className="text-sm text-muted-foreground">Receive alerts when a high-risk patient is detected</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">AI Analysis Completion</p>
                            <p className="text-sm text-muted-foreground">Get notified when AI completes analysis of patient scans</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">System Updates</p>
                            <p className="text-sm text-muted-foreground">Receive notifications about system updates</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-muted-foreground">Receive email notifications for important alerts</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                      <Button>Save Preferences</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="appearance" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Theme Preference</Label>
                          <div className="grid grid-cols-3 gap-4">
                            <Button variant="outline" className="justify-start">Light</Button>
                            <Button variant="outline" className="justify-start">Dark</Button>
                            <Button variant="outline" className="justify-start">System</Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Dashboard Layout</Label>
                          <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="justify-start">Compact</Button>
                            <Button variant="outline" className="justify-start">Comfortable</Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Reduce Animations</p>
                            <p className="text-sm text-muted-foreground">Minimize animations for better performance</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                      <Button>Apply Settings</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="system" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>System Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">AI Model Version</p>
                            <p className="text-sm text-muted-foreground">Currently using v2.5.0</p>
                          </div>
                          <Button variant="outline">Check for Updates</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Data Synchronization</p>
                            <p className="text-sm text-muted-foreground">Sync data with hospital database</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Automatic Logout</p>
                            <p className="text-sm text-muted-foreground">Automatically log out after inactivity</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeout">Inactivity Timeout (minutes)</Label>
                          <Input id="timeout" type="number" defaultValue="30" />
                        </div>
                      </div>
                      <Button>Save System Settings</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
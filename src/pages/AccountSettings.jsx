import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { User, Settings, Shield } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const AccountSettings = () => {
  const { user, profile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <SEOHead 
        title="Account Settings - MORS" 
        description="Manage your MORS member account settings and profile information"
      />
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
            <p className="text-gray-600">Manage your MORS member account and preferences</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Profile Information Card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Your basic account information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profile?.first_name || ''}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profile?.last_name || ''}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={user?.email || ''}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Contact administration to update your profile information.
                </p>
              </CardContent>
            </Card>

            {/* Account Actions Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Account Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/change-password'}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  
                  <Separator />
                  
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Account Status Card */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
              <CardDescription>
                Information about your MORS membership
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div>
                  <h3 className="font-medium text-green-900">Active Member</h3>
                  <p className="text-sm text-green-700">
                    You have full access to all MORS member features
                  </p>
                </div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
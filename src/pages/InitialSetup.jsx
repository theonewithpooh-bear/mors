import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

const InitialSetup = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const createInitialUser = async () => {
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const { data, error } = await supabase.functions.invoke('create-initial-user');
      
      if (error) {
        setError(error.message);
      } else {
        setMessage('Initial user account created successfully! You can now login with Monty@mors.org.uk and password 1234');
      }
    } catch (err) {
      setError('Failed to create initial user: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">MORS Setup</CardTitle>
          <CardDescription>
            Create the initial member account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert className="bg-red-50 border-red-200">
              <AlertDescription className="text-red-800">
                {error}
              </AlertDescription>
            </Alert>
          )}
          
          {message && (
            <Alert className="bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">
                {message}
              </AlertDescription>
            </Alert>
          )}
          
          <Button 
            onClick={createInitialUser}
            className="w-full bg-black text-white hover:bg-gray-900"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Initial User Account'}
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            <p>This will create the account:</p>
            <p><strong>Email:</strong> Monty@mors.org.uk</p>
            <p><strong>Password:</strong> 1234</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InitialSetup;
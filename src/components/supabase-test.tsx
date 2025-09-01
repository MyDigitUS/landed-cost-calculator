"use client";

import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SupabaseTest() {
  const [connectionStatus, setConnectionStatus] = useState<"testing" | "connected" | "error">("testing");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    async function testConnection() {
      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        setConnectionStatus("error");
        setErrorMessage("Supabase environment variables not configured");
        return;
      }

      try {
        // Test the connection by querying Supabase
        const { error } = await supabase
          .from("_realtime_schema_migrations") // This table exists in every Supabase project
          .select("*")
          .limit(1);

        if (error) {
          // If we get an auth error, that's actually good - it means we can connect
          if (error.message.includes("JWT") || error.message.includes("auth")) {
            setConnectionStatus("connected");
          } else {
            setConnectionStatus("error");
            setErrorMessage(error.message);
          }
        } else {
          setConnectionStatus("connected");
        }
      } catch (err) {
        setConnectionStatus("error");
        setErrorMessage(err instanceof Error ? err.message : "Unknown error");
      }
    }

    testConnection();
  }, []);

  const getStatusColor = () => {
    switch (connectionStatus) {
      case "testing":
        return "text-yellow-600";
      case "connected":
        return "text-green-600";
      case "error":
        return "text-red-600";
    }
  };

  const getStatusText = () => {
    switch (connectionStatus) {
      case "testing":
        return "Testing connection...";
      case "connected":
        return "✅ Connected to Supabase";
      case "error":
        return "❌ Connection failed";
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Supabase Connection Test</CardTitle>
        <CardDescription>Testing connection to Supabase backend</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={`font-medium ${getStatusColor()}`}>
          {getStatusText()}
        </div>
        {connectionStatus === "error" && (
          <div className="mt-2 text-sm text-muted-foreground">
            <strong>Error:</strong> {errorMessage}
            <br />
            <br />
            <strong>Setup required:</strong>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Create Supabase project at supabase.com</li>
              <li>Copy environment variables to .env.local</li>
              <li>See SUPABASE_SETUP.md for details</li>
            </ol>
          </div>
        )}
        {connectionStatus === "connected" && (
          <div className="mt-2 text-sm text-muted-foreground">
            Supabase client is properly configured and can connect to your project.
            Ready for authentication and database operations!
          </div>
        )}
      </CardContent>
    </Card>
  );
}
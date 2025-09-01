import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database schema types (to be updated when Supabase project is configured)
export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          full_name: string | null;
          company_name: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          company_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          company_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          user_id: string;
          sku_code: string;
          product_name: string;
          supplier_country: string;
          product_category: string | null;
          hs_code: string | null;
          base_cost: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          sku_code: string;
          product_name: string;
          supplier_country: string;
          product_category?: string | null;
          hs_code?: string | null;
          base_cost: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          sku_code?: string;
          product_name?: string;
          supplier_country?: string;
          product_category?: string | null;
          hs_code?: string | null;
          base_cost?: number;
          created_at?: string;
        };
      };
      calculations: {
        Row: {
          id: string;
          user_id: string;
          product_id: string | null;
          calculation_data: Record<string, unknown>; // JSON object
          tariff_rate: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          product_id?: string | null;
          calculation_data: Record<string, unknown>;
          tariff_rate: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          product_id?: string | null;
          calculation_data?: Record<string, unknown>;
          tariff_rate?: number;
          created_at?: string;
        };
      };
    };
    Views: Record<never, never>;
    Functions: Record<never, never>;
    Enums: Record<never, never>;
  };
}

// Create typed client
export const supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL !== undefined &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== undefined &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== "" &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== ""
  );
};
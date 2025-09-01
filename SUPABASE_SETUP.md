# Supabase Setup Guide

This guide will help you set up a Supabase project for the Tariff Impact Calculator.

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign in with GitHub (recommended)
4. Click "New project"
5. Choose your organization
6. Fill in project details:
   - **Name**: `tariff-impact-calculator`
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Free tier (sufficient for MVP)
7. Click "Create new project"

⏱️ **Wait 2-3 minutes** for the project to be ready.

## 2. Get API Keys

Once your project is ready:

1. Go to **Settings** → **API**
2. Copy the following values:

```bash
# Project URL
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co

# Anon key (safe to use in frontend)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Service role key (keep secret, for server-side operations)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

## 3. Update Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update the Supabase variables in `.env.local`:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

## 4. Set Up Database Schema (V2 Ready)

### Authentication (Built-in)
Supabase provides built-in authentication. No setup needed for MVP.

### Tables for V2 (Future)

When ready for V2, run these SQL commands in the Supabase SQL editor:

```sql
-- Enable Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- User profiles table
CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  company_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on user_profiles
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policy so users can only see their own profile
CREATE POLICY "Users can view own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);

-- Products/SKUs table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  sku_code TEXT NOT NULL,
  product_name TEXT NOT NULL,
  supplier_country TEXT NOT NULL,
  product_category TEXT,
  hs_code TEXT,
  base_cost DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, sku_code)
);

-- Enable RLS on products
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own products" ON products
  FOR ALL USING (auth.uid() = user_id);

-- Calculations history table
CREATE TABLE calculations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  calculation_data JSONB NOT NULL,
  tariff_rate DECIMAL(5,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on calculations
ALTER TABLE calculations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own calculations" ON calculations
  FOR ALL USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_products_user_id ON products(user_id);
CREATE INDEX idx_calculations_user_id ON calculations(user_id);
CREATE INDEX idx_calculations_product_id ON calculations(product_id);
```

## 5. Test Connection

Test your Supabase connection by running:

```bash
npm run dev
```

Check the browser console for any Supabase connection errors.

## 6. Next Steps

### For MVP (Current)
- ✅ Supabase client configured
- ✅ Environment variables set  
- ✅ Type definitions ready
- 🔄 Connection tested

### For V2 (Future)
- Authentication setup
- Database tables creation
- Row Level Security policies
- User profile management
- Data persistence for calculations

## Troubleshooting

### Common Issues

**1. "Invalid API key" error**
- Double-check your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Make sure there are no extra spaces
- Verify the key in Supabase dashboard → Settings → API

**2. "Project not found" error**
- Verify your `NEXT_PUBLIC_SUPABASE_URL`
- Make sure the project is fully initialized (wait 2-3 minutes)

**3. CORS errors**
- Make sure you're using the correct URL format: `https://your-project-ref.supabase.co`
- Check that your domain is added to allowed origins (usually automatic for localhost)

### Getting Help

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
- [GitHub Issues](https://github.com/MyDigitUS/tariff-impact-calculator/issues)

---

**Next:** Continue with Issue #4 (Vercel Deployment) once Supabase is configured!
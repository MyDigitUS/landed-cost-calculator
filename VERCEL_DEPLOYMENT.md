# Vercel Deployment Guide

This guide will help you deploy the Landed Cost Calculator to Vercel with all necessary configurations.

## Prerequisites

- ✅ GitHub repository created and synced
- ✅ Next.js application building successfully (`npm run build`)
- ✅ Environment variables prepared (Supabase, HubSpot, etc.)

## 1. Connect GitHub Repository to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New..."** → **"Project"**
3. Find your repository: `MyDigitUS/landed-cost-calculator`
4. Click **"Import"**

### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your-username)
# - Link to existing project? No
# - What's your project's name? landed-cost-calculator
# - In which directory is your code located? ./
```

## 2. Configure Environment Variables

In the Vercel dashboard, go to your project → **Settings** → **Environment Variables**

Add the following variables:

### Required for Full Functionality
```bash
# Supabase (when ready)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# HubSpot (when ready) 
HUBSPOT_API_KEY=your-hubspot-api-key
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your-hubspot-portal-id
NEXT_PUBLIC_HUBSPOT_FORM_ID=your-hubspot-form-id

# Analytics (when ready)
NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Error Monitoring (when ready)
SENTRY_DSN=your-sentry-dsn
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

### Always Required
```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-app-domain.vercel.app
```

⚠️ **Important**: Set these for **Production**, **Preview**, and **Development** environments as needed.

## 3. Deployment Settings

### Build & Output Settings
- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

### Advanced Settings
- **Node.js Version**: 20.x (latest LTS)
- **Turbopack**: Enabled (configured in vercel.json)

### Security Headers
Security headers are configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY  
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: origin-when-cross-origin

## 4. Custom Domain (Optional)

To use a custom domain:

1. Go to project **Settings** → **Domains**
2. Add your domain (e.g., `tariffcalculator.com`)
3. Configure DNS:
   - **Type**: CNAME
   - **Name**: www (or @)
   - **Value**: cname.vercel-dns.com

## 5. Deployment Process

### Automatic Deployments
- **Production**: Triggered on push to `main` branch
- **Preview**: Triggered on push to any other branch
- **Pull Requests**: Automatic preview deployments

### Manual Deployment
```bash
# Deploy current branch
vercel

# Deploy to production (main branch only)
vercel --prod
```

## 6. Post-Deployment Checklist

After successful deployment:

- [ ] ✅ Site loads without errors
- [ ] ✅ Shadcn/ui components render correctly
- [ ] ✅ Dark/light mode works
- [ ] ✅ Responsive design on mobile
- [ ] ✅ Supabase connection test (if configured)
- [ ] ✅ Performance: Lighthouse score >90
- [ ] ✅ Security headers active

## 7. Monitoring & Analytics

### Built-in Vercel Analytics
- Enable in project settings → Analytics
- No configuration needed
- Basic traffic and performance metrics

### Performance Monitoring
```bash
# Check Core Web Vitals
vercel --prod --debug

# Monitor bundle size
npx @next/bundle-analyzer
```

## 8. Environment-Specific URLs

After deployment, you'll have:

- **Production**: `https://landed-cost-calculator.vercel.app`
- **Preview**: `https://landed-cost-calculator-git-[branch].vercel.app`
- **Development**: `http://localhost:3000`

## 9. Troubleshooting

### Build Errors

**Issue**: "Module not found" errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
vercel --prod
```

**Issue**: Environment variable issues
- Check variables are set in Vercel dashboard
- Ensure NEXT_PUBLIC_ prefix for client-side variables
- Redeploy after adding variables

### Performance Issues

**Bundle Size Too Large**
```bash
# Analyze bundle
npx @next/bundle-analyzer

# Enable tree shaking
# Check for unnecessary imports
```

**Slow Loading**
- Enable Image Optimization (automatic in Next.js)
- Use dynamic imports for large components
- Check Core Web Vitals in Vercel Analytics

### Domain Issues

**Custom Domain Not Working**
- Verify DNS settings (can take 24-48 hours)
- Check SSL certificate status
- Ensure domain is properly configured in Vercel

## 10. Deployment Commands Reference

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy preview
vercel

# Deploy to production  
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-name]
```

## 11. Advanced Configuration

### Edge Functions (Future)
```javascript
// pages/api/edge-example.js
export const config = {
  runtime: 'edge',
}

export default function handler(req) {
  return new Response('Hello from Edge Function!')
}
```

### Middleware (Future)
```typescript
// middleware.ts
import { NextResponse } from 'next/server'

export function middleware(request) {
  // Add custom logic
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
```

## 12. Success Metrics

**Technical Performance**
- Build time: <2 minutes
- Cold start: <1 second
- Lighthouse score: >95
- Core Web Vitals: All green

**Business Metrics** 
- Uptime: >99.9%
- Global latency: <200ms
- Error rate: <0.1%

---

## Next Steps After Deployment

1. **Test thoroughly** on production URL
2. **Configure monitoring** (Sentry, Posthog)
3. **Set up analytics** tracking
4. **Document URLs** for team access
5. **Plan custom domain** setup if needed

**Production URL**: Will be provided after deployment
**Repository**: https://github.com/MyDigitUS/landed-cost-calculator

Ready to deploy! 🚀
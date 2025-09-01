# GitHub Issues to Create

Copy and paste these into GitHub Issues after repository setup.

---

## PHASE 1: FOUNDATION ISSUES

### Issue 1: Set up Next.js 15 Project with TypeScript
**Labels:** `phase: foundation`, `type: feature`, `priority: critical`  
**Milestone:** Phase 1: Foundation  
**Assignee:** [Your username]

**Description:**
Initialize Next.js 15 project with App Router, TypeScript, and modern tooling.

**Acceptance Criteria:**
- [ ] Next.js 15 project created with App Router
- [ ] TypeScript configured with strict mode
- [ ] Biome configured for linting and formatting
- [ ] Project structure matches planned architecture
- [ ] Development server runs without errors

**Tasks:**
- [ ] Run `npx create-next-app@latest`
- [ ] Configure TypeScript strict mode
- [ ] Set up Biome configuration
- [ ] Create basic folder structure
- [ ] Test development environment

---

### Issue 2: Configure Tailwind CSS and Shadcn/ui
**Labels:** `phase: foundation`, `type: feature`, `priority: critical`  
**Milestone:** Phase 1: Foundation

**Description:**
Set up Tailwind CSS v4 and Shadcn/ui component library for modern styling.

**Acceptance Criteria:**
- [ ] Tailwind CSS v4 installed and configured
- [ ] Shadcn/ui CLI installed and initialized
- [ ] Basic UI components available (Button, Card, Input, etc.)
- [ ] Dark mode support configured
- [ ] Custom color scheme applied

**Tasks:**
- [ ] Install and configure Tailwind CSS
- [ ] Set up Shadcn/ui with `npx shadcn-ui@latest init`
- [ ] Install essential components
- [ ] Configure theme and dark mode
- [ ] Test component rendering

---

### Issue 3: Set up Supabase Project
**Labels:** `phase: foundation`, `type: feature`, `priority: high`  
**Milestone:** Phase 1: Foundation

**Description:**
Create and configure Supabase project for future database and auth needs.

**Acceptance Criteria:**
- [ ] Supabase project created
- [ ] Supabase client configured in Next.js
- [ ] Environment variables set up
- [ ] Connection tested successfully
- [ ] Basic database schema planned

**Tasks:**
- [ ] Create Supabase project at supabase.com
- [ ] Install `@supabase/supabase-js`
- [ ] Configure client in `/lib/supabase.ts`
- [ ] Set up environment variables
- [ ] Test connection

---

### Issue 4: Configure Vercel Deployment
**Labels:** `phase: foundation`, `type: feature`, `priority: high`  
**Milestone:** Phase 1: Foundation

**Description:**
Set up Vercel deployment pipeline with preview environments.

**Acceptance Criteria:**
- [ ] Vercel project connected to GitHub repo
- [ ] Environment variables configured in Vercel
- [ ] Automatic deployments on push to main
- [ ] Preview deployments for PRs
- [ ] Custom domain configured (optional)

**Tasks:**
- [ ] Connect GitHub repo to Vercel
- [ ] Configure environment variables
- [ ] Test deployment pipeline
- [ ] Set up preview environments
- [ ] Configure domain settings

---

## PHASE 2: MVP CORE ISSUES

### Issue 5: Create Landing Page Layout
**Labels:** `phase: mvp-core`, `component: landing-page`, `type: feature`, `priority: critical`  
**Milestone:** Phase 2: MVP Core

**Description:**
Build the main landing page with hero section, features, and call-to-action.

**Acceptance Criteria:**
- [ ] Hero section with clear value proposition
- [ ] Features highlighting section
- [ ] Professional design using Shadcn/ui
- [ ] Mobile-responsive layout
- [ ] CTA buttons leading to calculator

**Tasks:**
- [ ] Create landing page route in `/app/page.tsx`
- [ ] Build Hero component
- [ ] Create Features section
- [ ] Add CTA components
- [ ] Implement responsive design

---

### Issue 6: Build Calculator Input Form
**Labels:** `phase: mvp-core`, `component: calculator`, `type: feature`, `priority: critical`  
**Milestone:** Phase 2: MVP Core

**Description:**
Create the calculator input form with validation using React Hook Form and Zod.

**Acceptance Criteria:**
- [ ] Input form with all required fields
- [ ] Real-time validation with Zod schemas
- [ ] Error messages for invalid inputs
- [ ] Professional styling with Shadcn/ui
- [ ] Mobile-friendly form layout

**Fields:**
- Product Cost per Unit ($)
- Shipping Cost per Unit ($)
- Insurance Cost per Unit ($)
- Handling/Other Costs per Unit ($)
- Current Tariff Rate (%)
- Desired Profit Margin (%)
- Total Units Purchased

---

### Issue 7: Implement Calculation Logic
**Labels:** `phase: mvp-core`, `component: calculator`, `type: feature`, `priority: critical`  
**Milestone:** Phase 2: MVP Core

**Description:**
Create the core calculation engine with real-time updates.

**Acceptance Criteria:**
- [ ] Calculation logic matches PRD specifications
- [ ] Real-time updates on input changes
- [ ] Handles edge cases (zero values, large numbers)
- [ ] Performance optimized for instant updates
- [ ] TypeScript types for all calculations

**Formula:**
```
Total Cost = Product Cost + Shipping + Insurance + Handling + (Product Cost × Tariff Rate)
Landed Cost = Total Cost per Unit
Selling Price = Landed Cost × (1 + Profit Margin)
```

---

### Issue 8: Create Results Display Component  
**Labels:** `phase: mvp-core`, `component: calculator`, `type: feature`, `priority: critical`  
**Milestone:** Phase 2: MVP Core

**Description:**
Build the results display with cost breakdown and visualizations.

**Acceptance Criteria:**
- [ ] Clear results display with all calculated values
- [ ] Visual cost breakdown (chart or infographic)
- [ ] Profit margin indicators
- [ ] Professional styling
- [ ] Mobile-responsive design

**Display Fields:**
- Total Cost per Unit
- Landed Cost per Unit
- Recommended Selling Price per Unit
- Total Investment Required
- Total Revenue at Recommended Price
- Total Profit Amount
- Profit Margin Verification

---

### Issue 9: Mobile Responsive Design Implementation
**Labels:** `phase: mvp-core`, `type: enhancement`, `priority: high`  
**Milestone:** Phase 2: MVP Core

**Description:**
Ensure all components work perfectly on mobile devices (320px+).

**Acceptance Criteria:**
- [ ] Mobile-first responsive design
- [ ] Works on 320px+ screen widths
- [ ] Touch-friendly interface
- [ ] Readable typography on small screens
- [ ] Optimized form layout for mobile

---

## PHASE 3: INTEGRATIONS ISSUES

### Issue 10: HubSpot Email Capture Integration
**Labels:** `phase: integrations`, `component: email-capture`, `type: feature`, `priority: high`  
**Milestone:** Phase 3: Integrations

**Description:**
Implement post-calculation email capture with HubSpot integration.

**Acceptance Criteria:**
- [ ] Email form appears after successful calculation
- [ ] Optional checkbox with clear value proposition
- [ ] HubSpot API integration working
- [ ] Email validation and error handling
- [ ] Success/failure feedback to user

---

### Issue 11: Exit-Intent Popup
**Labels:** `phase: integrations`, `component: email-capture`, `type: feature`, `priority: medium`  
**Milestone:** Phase 3: Integrations

**Description:**
Create exit-intent popup for email capture.

**Acceptance Criteria:**
- [ ] Triggers on cursor movement toward browser exit
- [ ] Shows only once per session
- [ ] Easy dismiss functionality
- [ ] Non-intrusive design
- [ ] Mobile-friendly implementation

---

### Issue 12: Posthog Analytics Integration
**Labels:** `phase: integrations`, `component: analytics`, `type: feature`, `priority: high`  
**Milestone:** Phase 3: Integrations

**Description:**
Set up Posthog for user behavior tracking and analytics.

**Acceptance Criteria:**
- [ ] Posthog installed and configured
- [ ] Event tracking for key user actions
- [ ] Conversion funnel tracking
- [ ] Dashboard configured for key metrics
- [ ] Privacy compliant implementation

---

### Issue 13: Sentry Error Monitoring
**Labels:** `phase: integrations`, `component: monitoring`, `type: feature`, `priority: medium`  
**Milestone:** Phase 3: Integrations

**Description:**
Implement Sentry for error monitoring and performance tracking.

**Acceptance Criteria:**
- [ ] Sentry SDK installed and configured
- [ ] Error boundary implementation
- [ ] Performance monitoring enabled
- [ ] Source maps configured for debugging
- [ ] Alert notifications set up

---

## PHASE 4: LAUNCH ISSUES

### Issue 14: Unit Testing Setup
**Labels:** `phase: launch`, `type: testing`, `priority: high`  
**Milestone:** Phase 4: Launch

**Description:**
Set up comprehensive unit testing with Vitest.

**Acceptance Criteria:**
- [ ] Vitest configured and running
- [ ] Calculator logic tests (>90% coverage)
- [ ] Component unit tests
- [ ] Form validation tests
- [ ] API integration tests

---

### Issue 15: E2E Testing with Playwright
**Labels:** `phase: launch`, `type: testing`, `priority: high`  
**Milestone:** Phase 4: Launch

**Description:**
Implement end-to-end testing for critical user journeys.

**Acceptance Criteria:**
- [ ] Playwright configured
- [ ] Landing page navigation test
- [ ] Complete calculation flow test
- [ ] Email capture flow test
- [ ] Mobile device testing

---

### Issue 16: Performance Optimization
**Labels:** `phase: launch`, `type: enhancement`, `priority: high`  
**Milestone:** Phase 4: Launch

**Description:**
Optimize application performance to meet target metrics.

**Acceptance Criteria:**
- [ ] Lighthouse score >95
- [ ] First Contentful Paint <1.2s
- [ ] Cumulative Layout Shift <0.1
- [ ] Time to Interactive <2.5s
- [ ] Bundle size optimized

---

### Issue 17: SEO Implementation
**Labels:** `phase: launch`, `type: enhancement`, `priority: medium`  
**Milestone:** Phase 4: Launch

**Description:**
Implement SEO best practices for discoverability.

**Acceptance Criteria:**
- [ ] Meta tags and Open Graph implemented
- [ ] Sitemap.xml generated
- [ ] robots.txt configured  
- [ ] Schema markup for calculator
- [ ] Page titles and descriptions optimized

---

### Issue 18: Production Deployment
**Labels:** `phase: launch`, `type: deployment`, `priority: critical`  
**Milestone:** Phase 4: Launch

**Description:**
Final production deployment and monitoring setup.

**Acceptance Criteria:**
- [ ] Production environment configured
- [ ] Environment variables set
- [ ] Domain configured and SSL enabled
- [ ] Monitoring dashboards active
- [ ] Backup and recovery plan documented

---

## FUTURE ENHANCEMENTS (V2)

### Issue 19: User Authentication System
**Labels:** `type: feature`, `priority: low`  
**Milestone:** V2 Features

**Description:**
Implement Supabase Auth for user accounts and data persistence.

---

### Issue 20: Saved Calculations History
**Labels:** `type: feature`, `priority: low`  
**Milestone:** V2 Features

**Description:**
Allow users to save and retrieve past calculations.

---

### Issue 21: Multi-Country Supplier Comparison
**Labels:** `type: feature`, `priority: low`  
**Milestone:** V2 Features

**Description:**
Compare costs across multiple suppliers and countries.

---

### Issue 22: CSV Import/Export Functionality  
**Labels:** `type: feature`, `priority: low`  
**Milestone:** V2 Features

**Description:**
Bulk calculation processing with CSV file handling.

---

## Instructions for Creating Issues

1. Copy each issue section above
2. Go to your GitHub repository → Issues → New Issue
3. Paste the title as the issue title
4. Paste the description content
5. Add the specified labels
6. Assign to the milestone
7. Create the issue

This will give you a complete project board with all development phases tracked!
# Tariff Impact Calculator

A modern SaaS application helping e-commerce store owners calculate the true cost of importing products, including tariffs, shipping, and fees.

## 🎯 Project Overview

**Vision**: Simple, accurate tariff impact calculator that helps e-commerce businesses make informed importing and pricing decisions.

**Target Users**: Small to medium e-commerce business owners, product sourcing managers, import/export specialists.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS + Shadcn/ui
- **Backend**: Supabase (PostgreSQL + Authentication)
- **Deployment**: Vercel with Edge Functions
- **Analytics**: Posthog
- **Email**: HubSpot integration
- **Monitoring**: Sentry

## 🚀 Development Phases

### Phase 1: Modern Foundation (Days 1-2)
- Next.js 15 project setup with TypeScript
- Tailwind CSS + Shadcn/ui components
- Supabase project configuration
- Vercel deployment pipeline

### Phase 2: MVP Features (Days 3-5)
- Landing page with professional design
- Interactive calculator with real-time updates
- Results visualization and breakdown
- Mobile-responsive design

### Phase 3: Integrations (Days 6-7)
- HubSpot email capture
- Posthog analytics
- Sentry error monitoring
- Performance optimization

### Phase 4: Testing + Launch (Days 8-10)
- Unit tests with Vitest
- E2E tests with Playwright
- Performance audits
- Production deployment

## 📊 Success Metrics

### Technical
- Lighthouse score >95
- First Contentful Paint <1.2s
- Mobile responsive (320px+)

### Business
- 100+ users in first month
- 80%+ calculation completion rate
- 20%+ email capture rate

## 🔧 Getting Started

```bash
# Clone repository
git clone https://github.com/[username]/tariff-impact-calculator.git
cd tariff-impact-calculator

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## 📝 Project Structure

```
tariff-calculator/
├── app/                     # Next.js App Router
│   ├── (marketing)/         # Landing page
│   ├── calculator/          # Calculator interface
│   └── api/                 # API routes
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── calculator/         # Calculator components
│   └── marketing/          # Landing page components
├── lib/                    # Utilities and configurations
├── types/                  # TypeScript type definitions
└── tests/                  # Test files
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
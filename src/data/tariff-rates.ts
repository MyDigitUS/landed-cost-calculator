/**
 * DEMO TARIFF RATES - NOT FOR PRODUCTION USE
 * 
 * ⚠️ WARNING: These are static demo rates for development/testing only
 * 
 * PRODUCTION REQUIREMENTS:
 * - Real-time tariff data from official sources
 * - Automatic updates when trade policies change
 * - Comprehensive coverage of all country pairs
 * - HS code specific rates (current version uses broad categories)
 * 
 * RECOMMENDED DATA SOURCES FOR PRODUCTION:
 * 1. US Trade Representative (USTR) official tariff schedules
 * 2. CBP (Customs and Border Protection) databases
 * 3. WTO Integrated Trade Intelligence Portal (I-TIP)
 * 4. Commercial providers: Avalara AvaTax, Thomson Reuters ONESOURCE
 * 
 * IMPLEMENTATION TODO:
 * - [ ] Integrate with official tariff API
 * - [ ] Add background sync jobs for rate updates
 * - [ ] Implement caching strategy with TTL
 * - [ ] Add notification system for rate changes
 * - [ ] Support HS code specific lookups
 * - [ ] Add rate effective dates and historical tracking
 */

import type { TariffInfo } from "@/types/calculator";

export const DEMO_TARIFF_RATES: Record<string, Record<string, TariffInfo>> = {
  // China to US tariffs (Section 301 + general rates)
  "China-United States": {
    "Electronics": { 
      rate: 25, 
      description: "Section 301 tariffs on Chinese electronics",
      effectiveDate: "2018-09-24" // Demo field for production tracking
    },
    "Clothing & Textiles": { 
      rate: 15, 
      description: "Textiles and apparel from China" 
    },
    "Home & Garden": { 
      rate: 10, 
      description: "Home goods and furniture" 
    },
    "Sports & Outdoors": { 
      rate: 12, 
      description: "Sporting goods and outdoor equipment" 
    },
    "Health & Beauty": { 
      rate: 8, 
      description: "Cosmetics and health products" 
    },
    "Automotive": { 
      rate: 25, 
      description: "Auto parts and accessories" 
    },
    "Industrial": { 
      rate: 20, 
      description: "Industrial equipment and machinery" 
    },
    "Food & Beverages": { 
      rate: 18, 
      description: "Food products and beverages" 
    },
    "Other": { 
      rate: 15, 
      description: "Other products from China" 
    }
  },

  // Vietnam to US tariffs (MFN rates)
  "Vietnam-United States": {
    "Electronics": { 
      rate: 5, 
      description: "MFN rates for Vietnamese electronics" 
    },
    "Clothing & Textiles": { 
      rate: 12, 
      description: "Vietnamese textiles under MFN" 
    },
    "Home & Garden": { 
      rate: 6, 
      description: "Home goods from Vietnam" 
    },
    "Sports & Outdoors": { 
      rate: 8, 
      description: "Sporting goods" 
    },
    "Health & Beauty": { 
      rate: 4, 
      description: "Health and beauty products" 
    },
    "Automotive": { 
      rate: 10, 
      description: "Automotive parts" 
    },
    "Industrial": { 
      rate: 8, 
      description: "Industrial goods" 
    },
    "Food & Beverages": { 
      rate: 15, 
      description: "Food products" 
    },
    "Other": { 
      rate: 7, 
      description: "Other Vietnamese products" 
    }
  },

  // General MFN rates for other countries
  "Other-United States": {
    "Electronics": { 
      rate: 10, 
      description: "General MFN electronics tariff" 
    },
    "Clothing & Textiles": { 
      rate: 12, 
      description: "General textiles tariff" 
    },
    "Home & Garden": { 
      rate: 8, 
      description: "General home goods tariff" 
    },
    "Sports & Outdoors": { 
      rate: 8, 
      description: "General sporting goods tariff" 
    },
    "Health & Beauty": { 
      rate: 6, 
      description: "General health products tariff" 
    },
    "Automotive": { 
      rate: 15, 
      description: "General automotive tariff" 
    },
    "Industrial": { 
      rate: 12, 
      description: "General industrial tariff" 
    },
    "Food & Beverages": { 
      rate: 10, 
      description: "General food tariff" 
    },
    "Other": { 
      rate: 10, 
      description: "General tariff rate" 
    }
  }
};

/**
 * Get last updated timestamp (demo function)
 * In production, this would track when rates were last synced
 */
export function getLastUpdated(): Date {
  return new Date('2025-01-01T00:00:00Z'); // Demo date
}

/**
 * Check if rates need updating (demo function)
 * In production, this would check against official sources
 */
export function needsUpdate(): boolean {
  const lastUpdate = getLastUpdated();
  const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
  return daysSinceUpdate > 7; // Update weekly in production
}
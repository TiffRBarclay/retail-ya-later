/**
 * Represents a discount threshold and its associated rate.
 */
interface DiscountTier {
  threshold: number;
  rate: number;
}

/**
 * Defines the various discount tiers based on order subtotal.
 * Ordered descending to ensure the highest eligible discount is applied first.
 */
export const DISCOUNT_TIERS: DiscountTier[] = [
  { threshold: 50000, rate: 0.15 },
  { threshold: 10000, rate: 0.10 },
  { threshold: 7000, rate: 0.07 },
  { threshold: 5000, rate: 0.05 },
  { threshold: 1000, rate: 0.03 },
];


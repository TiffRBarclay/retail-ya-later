import { DISCOUNT_TIERS } from "../constants/discounts";

/**
 * Determines the applicable discount rate based on total order value.
 * @param subtotal - The raw total (quantity * price)
 * @returns The percentage rate (e.g., 0.03 for 3%)
 */
export const getDiscountRate = (subtotal: number): number => {
  const applicableTier = DISCOUNT_TIERS.find(tier => subtotal >= tier.threshold);
  return applicableTier ? applicableTier.rate : 0;
};

/**
 * Calculates the discount amount based on the total order value.
 * * @param {number} subtotal - The raw total (quantity * price)
 * @returns The dollar amount to be discounted
 */
export const calculateDiscount = (subtotal: number): number => {
  const rate = getDiscountRate(subtotal);
  return subtotal * rate;
};

/**
 * Calculates the raw subtotal before discounts or taxes.
 */
export const calculateSubtotal = (quantity: number, price: number): number => {
  if (quantity < 0 || price < 0) return 0;
  return quantity * price;
};
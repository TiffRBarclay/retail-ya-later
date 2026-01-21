import { DISCOUNT_TIERS } from "../constants/discounts";
import { TAX_RATES } from "../constants/tax";


/**
 * Calculates the tax amount based on the region code.
 * @param {number} amount - The amount to be taxed (usually subtotal after discount)
 * @param {string} regionCode - The 3-letter region code
 * @returns The dollar amount of tax to add 
 */
export const calculateTax = (amount: number, regionCode: string): number => {
  const rate = TAX_RATES[regionCode.toUpperCase()] || 0;
  return amount * rate;
};
/**
 * Determines the applicable discount rate based on total order value.
 * @param {number} subtotal - The raw total (quantity * price)
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
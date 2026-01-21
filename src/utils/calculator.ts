/**
 * Calculates the discount amount based on the total order value.
 * Current Rule: Orders of $1,000 or more receive a 3% discount.
 * * @param {number} subtotal - The raw total (quantity * price)
 * @returns The dollar amount to be discounted
 */
export const calculateDiscount = (subtotal: number): number => {
  if (subtotal >= 1000) {
    return subtotal * 0.03;
  }
  return 0;
};

/**
 * Calculates the raw subtotal before discounts or taxes.
 */
export const calculateSubtotal = (quantity: number, price: number): number => {
  if (quantity < 0 || price < 0) return 0;
  return quantity * price;
};
/**
 * Core calculation logic for the Retail Calculator.
 * Separated from the UI to ensure testability and maintainability.
 */

/**
 * Calculates the raw subtotal before discounts or taxes.
 * @param {number} quantity - Number of items (must be non-negative)
 * @param {number} pricePerItem - Price per item (must be non-negative)
 * @returns {number} The product of quantity and price
 */
export const calculateSubtotal = (quantity: number, pricePerItem: number): number => {
    if (quantity < 0 || pricePerItem < 0) return 0;
    return quantity * pricePerItem;
}
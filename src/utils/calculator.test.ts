import { describe, it, expect } from 'vitest';
import { calculateDiscount, calculateSubtotal, getDiscountRate } from './calculator';

describe('calculateSubtotal', () => {
  it('should correctly multiply quantity and price', () => {
    expect(calculateSubtotal(100, 10)).toBe(1000);
    expect(calculateSubtotal(5, 19.99)).toBe(99.94999999999999);
  });

  it('should return 0 if quantity or price is negative', () => {
    expect(calculateSubtotal(-1, 10)).toBe(0);
    expect(calculateSubtotal(10, -5)).toBe(0);
  });

  it('should return 0 if quantity is zero', () => {
    expect(calculateSubtotal(0, 500)).toBe(0);
  });

  it('should handle floating point numbers correctly', () => {
    // Standard JS float check
    expect(calculateSubtotal(3, 0.1)).toBeCloseTo(0.3);
  });
});

describe('Discount Logic - Tier 1', () => {
  it('should return 0 discount for totals under $1,000', () => {
    expect(calculateDiscount(999.99)).toBe(0);
  });

  it('should return 3% discount for totals exactly $1,000', () => {
    // 1000 * 0.03 = 30
    expect(calculateDiscount(1000)).toBe(30);
  });

  it('should return 3% discount for totals over $1,000', () => {
    expect(calculateDiscount(2000)).toBe(60);
  });
});

describe('Full Discount Schedule', () => {
  const testCases = [
    { total: 999, expectedRate: 0 },
    { total: 1000, expectedRate: 0.03 },
    { total: 5000, expectedRate: 0.05 },
    { total: 7000, expectedRate: 0.07 },
    { total: 10000, expectedRate: 0.10 },
    { total: 50000, expectedRate: 0.15 },
  ];

  testCases.forEach(({ total, expectedRate }) => {
    it(`should apply ${expectedRate * 100}% discount for a total of $${total}`, () => {
      expect(getDiscountRate(total)).toBe(expectedRate);
    });
  });
});
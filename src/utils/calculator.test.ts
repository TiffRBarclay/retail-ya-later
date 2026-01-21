import { describe, it, expect } from 'vitest';
import { calculateDiscount, calculateSubtotal } from './calculator';

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
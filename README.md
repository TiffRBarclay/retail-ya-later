# Retail-Ya-Later

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/TiffRBarclay/retail-ya-later.git
cd retail-ya-later
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 1. Run Automated Tests

```bash
npm install
```

## Thoughts & Reasoning
- **Architecture**: I chose React + Vite + TypeScript for a high-performance development environment and robust type safety.

- **Slicing Strategy**: I followed a "Vertical Slice" approach, delivering functional increments (Logic + UI + Test) to ensure each task provided immediate customer value.

- **Testing Strategy**: Implemented Vitest for unit testing. I prioritized "Boundary Testing" (e.g., testing exactly $1,000 for discounts) to ensure financial accuracy.

- **Quality Focus**: Used JSDoc and clean TypeScript interfaces to ensure the codebase remains maintainable and self-documenting for the team.

## Tasks Completed

### [Issue 1](https://github.com/TiffRBarclay/retail-ya-later/issues/1) - Slice 1: Project Scaffold
- **Included**: Environment setup with Vite, React, TypeScript, Tailwind v4, and Vitest.
- **Value**: Establishes the technical foundation and UI template.
- **PR**: https://github.com/TiffRBarclay/retail-ya-later/pull/11

### [Issue 2](https://github.com/TiffRBarclay/retail-ya-later/issues/2) - Slice 2: Subtotal Calulation Logic
- **Included**: Pure logic engine for Quantity * Price with comprehensive unit tests.\
- **Value**: The core mathematical foundation for the calculator.
- **PR**: https://github.com/TiffRBarclay/retail-ya-later/pull/12

### [Issue 3](https://github.com/TiffRBarclay/retail-ya-later/issues/3) - Slice 3: Basic UI Input
- **Included**: Reusable, documented InputField component and reactive state management.
- **Value**: Provides the first user-facing interaction for raw price calculations.
- **PR**: https://github.com/TiffRBarclay/retail-ya-later/pull/13

### [Issue 4](https://github.com/TiffRBarclay/retail-ya-later/issues/4) - Slice 4: Discount Logic (Tier 1)
- **Included**: Implementation of the initial 3% discount threshold for totals over $1,000.
- **Value**: Introduces the first business rule to reward high-value orders.
- **PR**: https://github.com/TiffRBarclay/retail-ya-later/pull/14

### [Issue 5](https://github.com/TiffRBarclay/retail-ya-later/issues/5) - Slice 5: Full Discount Tiers
- **Included**: Configuration-driven logic for all tiers ($5k, $7k, $10k, $50k) and parametrized tests.
- **Value**: Satisfies the full bulk-discount requirement of the product specification.
- **PR**: https://github.com/TiffRBarclay/retail-ya-later/pull/15

*I am aware I accidently skipped 6*

### [Issue 7](https://github.com/TiffRBarclay/retail-ya-later/issues/7) - Slice 7: Region Input UI
- **Included**: Region code input and tax mapping for AUK, WLG, WAI, CHC, and TAS.
- **Value**: Finalizes the legal compliance requirement by applying regional taxes to the discounted total.
- **PR**: https://github.com/TiffRBarclay/retail-ya-later/pull/16

*(Individual PRs are also linked within the GitHub Issues tab)*

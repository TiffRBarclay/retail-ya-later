import { useMemo, useState, type ChangeEvent } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { calculateDiscount, calculateSubtotal } from "./utils/calculator";

function App() {
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setQuantity(Number(e.target.value));
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setPrice(Number(e.target.value));
  };

  /**
   * Compute the subtotal whenever quantity or price changes.
   * We convert strings to numbers here to keep the UI input flexible.
   */
  const subtotal = useMemo(() => {
    return calculateSubtotal(Number(quantity), Number(price));
  }, [quantity, price]);

  const discountAmount = useMemo(() => {
    return calculateDiscount(subtotal);
  }, [subtotal]);

  const totalAfterDiscount = subtotal - discountAmount;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      {/* Main container */}
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Retail-Ya-Later
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Calculate subtotals, bulk discounts, and refional taxes instantly!
          </p>
        </header>
        {/* Main Card */}
        <main className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          {/* Inputs Section */}
          <section className="space-y-6">
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 italic">
              <div className="space-y-6">
                <InputField
                  id="quantity"
                  label="Quantity"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  placeholder="0"
                />
                <InputField
                  id="price"
                  label="Price per item"
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                  placeholder="0"
                />
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mt-10 pt-8 border-t border-slate-100 space-y-3">
            <div className="flex justify-between items-center text-slate-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {discountAmount > 0 && (
              <div className="flex justify-between items-center text-green-600 font-medium">
                <span>Discount (3%)</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between items-center pt-3 border-t border-slate-50">
              <span className="text-slate-900 font-bold">
                Total after Discount
              </span>
              <span className="text-3xl font-bold text-blue-600">
                $
                {totalAfterDiscount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </section>

          {/* Project tech stack */}
          <footer className="mt-8 text-center text-sm text-slate-400">
            Built with React, TypeScript, and Tailwind CSS v4.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;

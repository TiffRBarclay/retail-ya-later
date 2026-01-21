import './App.css'

function App() {

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
              Input incoming.... 
            </div>
          </section>

          {/* Result Section - You'll add your calculation display here */}
          <section className="mt-10 pt-8 border-t border-slate-100">
             <div className="text-center text-slate-300">
               What will the results be???
             </div>
          </section>

          {/* Project tech stack */}
        <footer className="mt-8 text-center text-sm text-slate-400">
          Built with React, TypeScript, and Tailwind CSS v4.
        </footer>
        </main>
      </div>
    </div>
  )
}

export default App

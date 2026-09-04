import Header from './Header'

function Layout({ children, unit, onToggleUnit }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header unit={unit} onToggleUnit={onToggleUnit} />
      <main className="max-w-4xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}

export default Layout

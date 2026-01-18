export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-display-lg font-bold mb-4 gradient-text">404</h1>
        <p className="text-2xl text-white/70 mb-8">Page not found</p>
        <a 
          href="/" 
          className="inline-flex px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-green text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent-cyan/50 transition-all"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}

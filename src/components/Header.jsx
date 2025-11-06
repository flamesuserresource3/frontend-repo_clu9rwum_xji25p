import { Rocket, Star } from 'lucide-react'

function Header() {
  return (
    <header className="w-full sticky top-0 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-800">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500" />
            Star
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header

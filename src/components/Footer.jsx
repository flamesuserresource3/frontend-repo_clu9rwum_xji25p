function Footer() {
  return (
    <footer id="about" className="border-t border-red-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-800 font-semibold">Built with ❤️ for modern web apps</p>
          <p className="text-gray-600 mt-1">React + Tailwind + Vite</p>
        </div>
        <form className="w-full md:justify-self-end flex gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 rounded-lg border border-red-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button type="submit" className="rounded-lg bg-red-600 text-white px-5 py-3 font-medium shadow hover:bg-red-700 transition">
            Subscribe
          </button>
        </form>
      </div>
      <div className="text-center text-sm text-gray-500 pb-6">© {new Date().getFullYear()} Hello World Starter</div>
    </footer>
  )
}

export default Footer

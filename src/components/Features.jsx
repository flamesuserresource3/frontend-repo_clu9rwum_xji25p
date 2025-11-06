import { Home, Settings, User, Zap } from 'lucide-react'

const features = [
  {
    icon: Home,
    title: 'Fast Setup',
    desc: 'Start building immediately with a pre-configured React + Tailwind stack.'
  },
  {
    icon: Settings,
    title: 'Customizable',
    desc: 'Tweak styles and components effortlessly to match your brand.'
  },
  {
    icon: User,
    title: 'Accessible',
    desc: 'Built with sensible defaults and semantic HTML for everyone.'
  },
  {
    icon: Zap,
    title: 'Performance',
    desc: 'Optimized for speed with Vite, code-splitting, and best practices.'
  }
]

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Features</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">A few highlights that make this starter a great foundation for your next idea.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-gray-50 to-white">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

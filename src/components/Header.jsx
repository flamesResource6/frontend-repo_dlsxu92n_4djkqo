import { Megaphone } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-600 text-white">
            <Megaphone size={20} />
          </div>
          <span className="font-extrabold text-xl text-gray-800">Boostify</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#benefits" className="hover:text-gray-900">Benefits</a>
          <a href="/test" className="hover:text-gray-900">System Check</a>
        </nav>
      </div>
    </header>
  )
}

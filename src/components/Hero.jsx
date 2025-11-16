import { useState } from 'react'

export default function Hero({ onLeadSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      await onLeadSubmit({ name, email })
      setMessage('Success! Check your inbox for next steps.')
      setName('')
      setEmail('')
    } catch (err) {
      setMessage(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Launch a simple affiliate funnel in minutes
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Capture leads, present your offer, and track clicks — all in one streamlined flow.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 bg-white/70 backdrop-blur p-4 rounded-xl shadow border flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Get Instant Access'}
            </button>
          </form>
          {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
          <p className="mt-3 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
        </div>
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 border shadow">
          <div className="aspect-video w-full rounded-xl bg-white border flex items-center justify-center text-gray-500">
            Preview your thank-you page with an irresistible call-to-action.
          </div>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Built-in lead capture</li>
            <li>• Offer management and tracking</li>
            <li>• Clean, modern UI</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

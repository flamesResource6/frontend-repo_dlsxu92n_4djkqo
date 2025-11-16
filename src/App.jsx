import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import CTA from './components/CTA'

function App() {
  const [offers, setOffers] = useState([])
  const [leadId, setLeadId] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/offers`)
        const data = await res.json()
        setOffers(data || [])
      } catch (e) {
        console.error('Failed to load offers', e)
      }
    }
    fetchOffers()
  }, [])

  const handleLeadSubmit = async ({ name, email }) => {
    const res = await fetch(`${baseUrl}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.detail || 'Failed to submit')
    }
    const data = await res.json()
    setLeadId(data.id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <Header />
      <Hero onLeadSubmit={handleLeadSubmit} />
      <Benefits offers={offers} />
      {offers.length > 0 && <CTA offer={offers[0]} leadId={leadId} />}
      <footer className="py-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Boostify — Simple affiliate funnels</footer>
    </div>
  )
}

export default App

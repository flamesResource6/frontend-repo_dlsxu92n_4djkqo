export default function CTA({ offer, leadId }) {
  const handleClick = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/redirect/${offer.slug}?lead_id=${leadId || ''}`)
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (e) {
      console.error('Redirect failed', e)
    }
  }

  return (
    <section className="w-full py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">You're in! One last step ➜</h2>
        <p className="text-gray-600 mt-2">Tap below to claim your special offer now.</p>
        <button
          onClick={handleClick}
          className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow"
        >
          Go to Offer
        </button>
        <p className="text-xs text-gray-500 mt-3">We may earn a commission at no extra cost to you.</p>
      </div>
    </section>
  )
}

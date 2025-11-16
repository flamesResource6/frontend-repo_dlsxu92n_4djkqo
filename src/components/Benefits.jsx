export default function Benefits({ offers = [] }) {
  return (
    <section id="benefits" className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Why this works</h2>
        <p className="text-gray-600 mt-2">A proven three-step flow tuned for conversions.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="font-semibold text-lg">1. Capture</h3>
            <p className="text-gray-600 mt-2">Collect emails with a single, high-intent form. Grow your list while pre-framing the offer.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="font-semibold text-lg">2. Present</h3>
            <p className="text-gray-600 mt-2">Send visitors to a tailored thank-you page featuring your best affiliate offer.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="font-semibold text-lg">3. Track</h3>
            <p className="text-gray-600 mt-2">Monitor clicks and performance to double down on what converts.</p>
          </div>
        </div>

        {offers.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900">Featured offer</h3>
            <div className="mt-4 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border">
              <p className="text-gray-800 font-medium">{offers[0].title}</p>
              {offers[0].description && (
                <p className="text-gray-600 mt-1">{offers[0].description}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

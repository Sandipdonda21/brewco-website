// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-amber-900 mb-6">Ready to Elevate Your Event?</h2>
            <p className="text-gray-600 mb-8">
              Complete the form and our corporate catering specialist will contact you within 24 hours to discuss your specific requirements.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-amber-800"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-amber-800"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">corporate@brewandco.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-clock text-amber-800"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Business Hours</h4>
                  <p className="text-gray-600">Monday-Friday: 7am-7pm</p>
                  <p className="text-gray-600">Weekends: By appointment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form className="bg-white p-8 rounded-xl shadow-md" name="contact" netlify >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                  <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">Event Type*</label>
                <select id="event-type" name="eventName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500">
                  <option value="">Select an option</option>
                  <option value="conference">Conference</option>
                  <option value="office-service">Office Coffee/Tea Service</option>
                  <option value="meeting">Corporate Meeting</option>
                  <option value="product-launch">Product Launch</option>
                  <option value="gala">Gala/Networking Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Event Details*</label>
                <textarea id="details" name="eventDetails" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/Services.jsx
export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Exclusive Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored beverage solutions for corporate environments and special occasions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-amber-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-building text-amber-800 text-2xl"></i>
            </div>
            <h3 className="heading-font text-xl font-bold text-amber-900 mb-3">Corporate Meetings</h3>
            <p className="text-gray-600">
              Professional barista service for board meetings, conferences, and executive gatherings with custom branding options.
            </p>
          </div>
          <div className="bg-amber-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-calendar-check text-amber-800 text-2xl"></i>
            </div>
            <h3 className="heading-font text-xl font-bold text-amber-900 mb-3">Large Conferences</h3>
            <p className="text-gray-600">
              Multiple beverage stations strategically placed throughout your event space to minimize wait times.
            </p>
          </div>
          <div className="bg-amber-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-calendar-alt text-amber-800 text-2xl"></i>
            </div>
            <h3 className="heading-font text-xl font-bold text-amber-900 mb-3">Scheduled Office Service</h3>
            <p className="text-gray-600">
              Regular coffee & tea service for your workplace - daily, weekly or monthly schedules available for IT companies and corporate offices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
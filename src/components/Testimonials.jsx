// src/components/Testimonials.jsx
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-amber-900 opacity-90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            What our corporate clients say about our services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-card p-8 rounded-xl border border-amber-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold mr-4">TC</div>
              <div>
                <h4 className="font-bold text-white">TechCorp Inc.</h4>
                <p className="text-amber-200 text-sm">Annual Developer Conference</p>
              </div>
            </div>
            <p className="text-amber-100 italic mb-6">
              "Brew & Co. handled coffee service for our 3,000-attendee conference flawlessly. Their mobile espresso bars kept lines moving quickly and the quality was exceptional."
            </p>
            <div className="flex text-amber-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="testimonial-card p-8 rounded-xl border border-amber-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold mr-4">FG</div>
              <div>
                <h4 className="font-bold text-white">Financial Group</h4>
                <p className="text-amber-200 text-sm">Quarterly Board Retreats</p>
              </div>
            </div>
            <p className="text-amber-100 italic mb-6">
              "The tea sommelier service for our executive retreat elevated the entire experience. The customized tea pairings with our meals were a brilliant touch that impressed our guests."
            </p>
            <div className="flex text-amber-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="testimonial-card p-8 rounded-xl border border-amber-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold mr-4">GM</div>
              <div>
                <h4 className="font-bold text-white">Global Media</h4>
                <p className="text-amber-200 text-sm">Product Launch Event</p>
              </div>
            </div>
            <p className="text-amber-100 italic mb-6">
              "Their branded coffee cups with our logo were a hit at our launch party. The nitro cold brew station was the talk of the event - we've already booked them for next year."
            </p>
            <div className="flex text-amber-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-white text-amber-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-100 transition-all"
          >
            Become Our Next Success Story
          </a>
        </div>
      </div>
    </section>
  );
}
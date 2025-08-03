// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center rounded-xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')",
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 bg-amber-800 p-6 rounded-xl shadow-xl w-2/3">
                <div className="flex items-center">
                  <div className="text-white">
                    <p className="text-3xl font-bold">12+</p>
                    <p className="text-sm">Years Experience</p>
                  </div>
                  <div className="ml-6 text-white">
                    <p className="text-3xl font-bold">500+</p>
                    <p className="text-sm">Corporate Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-amber-900 mb-6">Our Corporate Beverage Philosophy</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Brew & Co. has specialized exclusively in premium tea and coffee service for corporate environments and large-scale events.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of certified baristas and tea sommeliers undergo rigorous training in corporate hospitality protocols, ensuring seamless integration with your event while maintaining the highest standards of beverage craftsmanship.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-amber-600 mt-1 mr-3 text-xl"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Exclusive Corporate Focus</h4>
                  <p className="text-gray-600 text-sm">All our equipment and workflows are optimized for high-volume business environments.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-amber-600 mt-1 mr-3 text-xl"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Global Sourcing Network</h4>
                  <p className="text-gray-600 text-sm">Direct relationships with coffee farms and tea estates worldwide for exceptional quality.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-amber-600 mt-1 mr-3 text-xl"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Sustainability Commitment</h4>
                  <p className="text-gray-600 text-sm">Carbon-neutral operations and compostable serviceware standard with all packages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
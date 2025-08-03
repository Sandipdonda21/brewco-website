// src/components/Menu.jsx
export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Premium Selection</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ethically sourced, specialty-grade beverages curated for discerning clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coffee Card */}
          <div className="menu-card bg-white rounded-xl shadow-md overflow-hidden transition-all">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-coffee text-amber-800 text-xl mr-2"></i>
                <h3 className="heading-font text-xl font-bold text-amber-900">Specialty Coffees</h3>
              </div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Single-origin espresso blends</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Cold brew nitro on tap</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Custom roast profiles</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Seasonal specialty drinks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tea Card */}
          <div className="menu-card bg-white rounded-xl shadow-md overflow-hidden transition-all">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1558160074-4d7d8bdf4206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-leaf text-amber-800 text-xl mr-2"></i>
                <h3 className="heading-font text-xl font-bold text-amber-900">Artisanal Teas</h3>
              </div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Premium loose-leaf selections</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Traditional tea ceremonies</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Custom tea blends with branding</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Wellness-focused herbal infusions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Add-ons Card */}
          <div className="menu-card bg-white rounded-xl shadow-md overflow-hidden transition-all">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-plus-circle text-amber-800 text-xl mr-2"></i>
                <h3 className="heading-font text-xl font-bold text-amber-900">Premium Add-ons</h3>
              </div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Gourmet syrups and toppings</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Alternative milk options</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Custom branded cups/sleeves</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-amber-600 mt-1 mr-2"></i>
                  <span>Accompanying pastries & snacks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all"
          >
            Request Full Menu Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <i className="fas fa-mug-hot text-amber-300 text-2xl mr-2"></i>
              <span className="heading-font text-xl font-bold">Brew & Co.</span>
            </div>
            <p className="text-amber-200 mb-6">
              Premium tea and coffee catering exclusively for corporate clients and large-scale events.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-amber-300 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-amber-300 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div>
            <h4 className="heading-font text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Corporate Meetings</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Conferences</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Product Launches</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Executive Retreats</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">VIP Hospitality</a></li>
            </ul>
          </div>
          <div>
            <h4 className="heading-font text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">About Us</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Our Process</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Sustainability</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Careers</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="heading-font text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Corporate Menu Guide</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Event Planning Tips</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Beverage Trends Report</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">FAQ</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-all">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-300 text-sm mb-4 md:mb-0">© 2023 Brew & Co. Corporate Catering. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-amber-300 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-amber-300 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-amber-300 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
// src/components/Hero.jsx
export default function Hero() {
  return (
    <header
      className="relative pt-24 pb-32 md:pt-32 md:pb-48 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="hero-gradient absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="heading-font text-4xl md:text-6xl font-bold text-white mb-6">
            Scheduled Coffee & Tea for Your Workplace
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-10 max-w-3xl mx-auto">
            Premium tea & coffee catering for corporate offices, IT companies and scheduled business events
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-amber-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-100 transition-all"
            >
              Request Our Services
            </a>
            <a
              href="#menu"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-900 transition-all"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
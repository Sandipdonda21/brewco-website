// src/components/FAQ.jsx
import { useState } from 'react';

const faqData = [
  {
    q: "What's the minimum size event you cater?",
    a: "We specialize in events with 50+ attendees. For smaller executive meetings, we offer our premium boardroom package which serves 10-25 people."
  },
  {
    q: "Can you accommodate last-minute requests?",
    a: "We maintain a rapid response team for urgent corporate needs. While we recommend booking at least 2 weeks in advance, we can often accommodate requests with 48 hours notice for existing clients."
  },
  {
    q: "Do you provide equipment or just beverages?",
    a: "Our full-service packages include all necessary equipment - commercial espresso machines, brew stations, serving ware, and even custom branded elements. We handle setup, operation, and breakdown."
  },
  {
    q: "What areas do you serve?",
    a: "We're based in major metropolitan areas nationwide and can travel for significant corporate events. Additional travel fees may apply for locations beyond 50 miles from our regional hubs."
  },
  {
    q: "How does scheduled office service work?",
    a: "We provide regular coffee and tea service to your workplace on a schedule that works for you - whether daily, weekly or monthly. Our barista will arrive at your specified times with all equipment and supplies needed to serve your team premium beverages."
  },
  {
    q: "Can you create custom blends for our company?",
    a: "Absolutely! Our master roaster and tea blender work directly with corporate clients to develop signature beverages that reflect your brand identity. This service requires 6-8 weeks lead time for development and production."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-font text-3xl font-bold text-amber-900 mb-4">Corporate Catering FAQs</h2>
          <p className="text-gray-600">Answers to common questions about our business services</p>
        </div>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.q}</h3>
                <i className={`fas fa-chevron-down text-amber-700 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`mt-4 ${openIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
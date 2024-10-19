// src/app/contact/page.tsx
"use client";
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  General: FAQItem[];
  Billing: FAQItem[];
  Support: FAQItem[];
  Product: FAQItem[];
}

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'General' | 'Billing' | 'Support' | 'Product'>('General');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData: FAQData = {
    General: [
      { question: 'How long does a web design project take?', answer: 'Typically, a web design project can take anywhere from 2 to 12 weeks, depending on the complexity.' },
      { question: 'What factors affect the cost of web design?', answer: 'The cost of web design depends on various factors such as the number of pages, features, and design complexity.' },
      { question: 'Do you provide ongoing support?', answer: 'Yes, we provide ongoing support to ensure your website runs smoothly post-launch.' },
      { question: 'What is your web design process?', answer: 'Our process includes discovery, design, development, testing, and launch phases.' },
    ],
    Billing: [
      { question: 'What payment methods do you accept?', answer: 'We accept payments via credit card, PayPal, and bank transfer.' },
      { question: 'Do you offer refunds?', answer: 'Refunds are offered on a case-by-case basis, depending on the project stage and services rendered.' },
      { question: 'Can I pay in installments?', answer: 'Yes, installment options are available for larger projects.' },
      { question: 'How do I receive an invoice?', answer: 'Invoices are sent to your registered email once the project starts.' },
    ],
    Support: [
      { question: 'How can I reach support?', answer: 'You can reach our support team via email or our online chat service, available 24/7.' },
      { question: 'What is the response time for support tickets?', answer: 'Our typical response time is within 24 hours for standard queries.' },
      { question: 'Do you offer priority support?', answer: 'Yes, we offer priority support for premium customers with a dedicated account manager.' },
      { question: 'What are your support hours?', answer: 'We are available for support 24/7, including weekends and holidays.' },
    ],
    Product: [
      { question: 'What features are included in the basic plan?', answer: 'The basic plan includes core features such as user management, analytics, and basic support.' },
      { question: 'Can I upgrade my product plan?', answer: 'Yes, you can upgrade your plan at any time by contacting our support team.' },
      { question: 'Do you offer product customization?', answer: 'Yes, we offer customization options to tailor the product to your business needs.' },
      { question: 'How often are updates released?', answer: 'We release product updates quarterly, with major features and security patches.' },
    ],
  };

  return (
    <div>
      <Navbar />

      {/* Main Section */}
      <section className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Let us know what you think!</h1>
        <p className="text-lg text-gray-600 mb-10">
          We’d love to hear from you. Whether it’s feedback, questions, or collaboration, feel free to reach out to us.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center space-x-3 text-gray-700">
            <i className="bx bxl-envelope text-4xl text-gray-600"></i>
            <p className="text-lg"><strong>Email:</strong> contact@company.com</p>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <i className="bx bxs-phone-call text-4xl text-gray-600"></i>
            <p className="text-lg"><strong>Phone:</strong> (414) 687 - 5892</p>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <i className="bx bxs-map text-4xl text-gray-600"></i>
            <p className="text-lg"><strong>Location:</strong> 56 Middle Point Rd, San Francisco, 94124</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white flex flex-wrap justify-center gap-8 px-4">
        {/* Left Section */}
        <div className="bg-gray-200 p-8 rounded-lg w-full md:w-1/3">
          <h3 className="font-bold mb-2 text-xl text-gray-800">Have an idea? Let’s make it real today!</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Porta phasellus ipsum tellus morbi amet orci faucibus lectus lacus.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Browse portfolio</button>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg w-full md:w-1/2 shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" placeholder="example@yourmail.com" className="w-full p-3 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Phone</label>
              <input type="text" placeholder="(123) 456 - 7890" className="w-full p-3 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Company</label>
              <input type="text" placeholder="Your Company" className="w-full p-3 border border-gray-300 rounded mt-1" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea placeholder="Type your message here..." className="w-full p-3 border border-gray-300 rounded mt-1 h-32"></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="bg-blue-600 text-white px-4 py-3 rounded w-full hover:bg-blue-700 transition">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <p className="text-center text-lg text-gray-600 mb-10">Here are some common questions our customers ask.</p>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          {(['General', 'Billing', 'Support', 'Product'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
              } transition duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          {faqData[activeTab].map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center px-4 py-3 bg-white border border-gray-400 rounded-lg"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <span className="text-2xl text-gray-900">{openQuestion === index ? '✕' : '+'}</span>
              </button>
              {openQuestion === index && (
                <div className="px-4 py-3 bg-gray-100 border border-gray-400 border-t-0 rounded-b-lg">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

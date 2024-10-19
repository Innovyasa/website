// src/app/contact/page.tsx
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      {/* Main Section */}
      <section className="text-center py-12 bg-gray-100">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Let us know what you think!
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          We’d love to hear from you. Whether it’s feedback, questions, or
          collaboration, feel free to reach out to us.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center space-x-3 text-gray-700">
            <i className="bx bxl-envelope text-4xl text-gray-600"></i>
            <p className="text-lg">
              <strong>Email:</strong> contact@company.com
            </p>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <i className="bx bxs-phone-call text-4xl text-gray-600"></i>
            <p className="text-lg">
              <strong>Phone:</strong> (414) 687 - 5892
            </p>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <i className="bx bxs-map text-4xl text-gray-600"></i>
            <p className="text-lg">
              <strong>Location:</strong> 56 Middle Point Rd, San Francisco, 94124
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex flex-wrap justify-center gap-10 px-6 py-16 bg-white">
        {/* Left Section */}
        <div className="bg-gray-200 p-8 rounded-lg w-full max-w-md text-center shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Have an idea? Let’s make it real today!
          </h3>
          <p className="text-gray-600 mb-6">
            Share your vision with us, and we’ll help bring it to life. Our team
            is ready to collaborate and innovate.
          </p>
          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Browse portfolio
          </button>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="example@yourmail.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone
              </label>
              <input
                type="text"
                placeholder="(123) 456 - 7890"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                placeholder="Your Company"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-10">
          We’ve compiled a list of questions to help clarify common queries.
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
            General
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
            Billing
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
            Support
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
            Product
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-4">
            <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition">
              How long does a web design project take?
            </button>
          </div>
          <div className="mb-4">
            <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition">
              What factors affect the cost of web design?
            </button>
          </div>
          <div className="mb-4">
            <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition">
              Do you provide ongoing support?
            </button>
          </div>
          <div className="mb-4">
            <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition">
              What is your web design process?
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

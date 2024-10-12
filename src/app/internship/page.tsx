// src/app/(internship)/internship/page.tsx
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function InternshipPage() {
  return (
    <div>
      <Navbar />

      {/* Header Section with Gradient Background */}
      <section
        style={{
          padding: '50px 0',
          background: `
            radial-gradient(39.56% 48.29% at 20% 115.78%, #A663CC 0%, rgba(255, 22, 117, 0) 100%),
            radial-gradient(54.23% 74.52% at 69.72% -10.08%, #A663CC 0%, rgba(166, 99, 204, 0) 100%),
            radial-gradient(21.67% 31.7% at 39.72% 107.79%, rgba(0, 167, 225, 0.8) 0%, rgba(0, 167, 225, 0) 100%),
            radial-gradient(50.08% 61.33% at 85.83% 24.14%, #A663CC 0%, rgba(166, 99, 204, 0) 100%),
            #00A7E1
          `,
          backgroundSize: 'cover',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            background: 'rgba(19, 15, 37, 0.5)',
            borderRadius: '24px',
            padding: '30px',
            maxWidth: '80%',
            margin: '0 auto',
          }}
        >
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '20px' }}>
            Internship Opportunities
          </h1>
          <p style={{ fontSize: '24px', marginBottom: '20px' }}>
            Gain real-world experience with Innovyasa internships.
          </p>
        </div>
      </section>

      {/* New Content - Intro and Insights */}
      <section style={{ padding: '40px 20px', backgroundColor: '#252144', color: '#FFFFFF', textAlign: 'center' }}>
        <h2 className="text-3xl font-bold mb-8">Innovyasa Internship Program</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '18px' }}>
          Welcome to the <strong>Innovyasa Internship Program</strong>—your gateway to career advancement in a cutting-edge virtual environment! 
          This internship is designed to empower you with hands-on experience through immersive projects, allowing you to sharpen your skills 
          and build confidence in the digital realm. Collaborate with fellow interns and industry professionals as you tackle innovative tasks 
          and challenges that nurture creativity and entrepreneurial thinking. With a focus on personal and professional growth, Innovyasa is your 
          launchpad to success in the modern digital economy.
        </p>

        {/* Insights Section */}
        <h3 className="text-2xl font-semibold mt-8">Insights</h3>
        <ul className="list-disc pl-6 mt-6 space-y-4 text-left max-w-lg mx-auto text-base">
          <li><strong>Innovative Mindset:</strong> Engage in a culture that emphasizes practical application and the power of ideas.</li>
          <li><strong>Versatile Skill Development:</strong> You&apos;ll engage in diverse, multidisciplinary tasks.</li>
          <li><strong>Real-World Impact:</strong> The projects you work on will have tangible effects.</li>
          <li><strong>Collaboration and Teamwork:</strong> Cultivate strong teamwork skills in a collaborative environment.</li>
          <li><strong>Personal Growth and Legacy:</strong> Leave a lasting imprint on the Innovyasa internship program.</li>
        </ul>
      </section>

      {/* Why Innovyasa Internship */}
      <section style={{ padding: '50px 20px', backgroundColor: '#FFFFFF', color: '#242145', textAlign: 'center' }}>
        <h2 className="text-3xl font-bold mb-6">Why Choose Innovyasa Internship?</h2>
        
        {/* Platform Section */}
        <h3 className="text-2xl font-semibold">Platform</h3>
        <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '18px' }}>
          The <strong>Innovyasa Platform</strong> provides a fully immersive virtual workspace where you can access valuable resources, 
          collaborate with your peers, and work on innovative projects.
        </p>
        <ul className="list-disc pl-6 mt-6 space-y-4 text-left max-w-lg mx-auto text-base">
          <li>Collaborative Tools to connect with your fellow interns and mentors.</li>
          <li>A vibrant community where your creativity and input are valued.</li>
          <li>Resources that empower you to excel in your tasks and overcome challenges.</li>
        </ul>

        {/* Approach Section */}
        <h3 className="text-2xl font-semibold mt-12">Approach</h3>
        <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '18px' }}>
          At Innovyasa, we prioritize a hands-on learning approach. You&apos;ll face real-world challenges that push you to apply your knowledge 
          and skills practically.
        </p>
        <ul className="list-disc pl-6 mt-6 space-y-4 text-left max-w-lg mx-auto text-base">
          <li>Personalized Mentorship</li>
          <li>Creative Problem-Solving</li>
          <li>Practical Learning</li>
        </ul>
      </section>

      {/* ROI Section */}
      <section style={{ padding: '40px 20px', backgroundColor: '#252144', color: '#FFFFFF', textAlign: 'center' }}>
        <h2 className="text-3xl font-bold mb-6">ROI (Return on Investment)</h2>
        <h3 className="text-2xl font-semibold">Perks</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-left max-w-lg mx-auto text-base">
          <li>Portfolio Development</li>
          <li>Networking Opportunities</li>
          <li>Employability</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">Benefits</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-left max-w-lg mx-auto text-base">
          <li>Flexible Work Hours</li>
          <li>Exclusive Networking Events</li>
          <li>Access to Learning Resources</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">Alumni Benefits</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-left max-w-lg mx-auto text-base">
          <li>Mentorship</li>
          <li>Structured Feedback</li>
          <li>Alumni Network</li>
        </ul>

        <p className="mt-8 max-w-lg mx-auto text-base">Innovyasa offers 24/7 support, ensuring you have access to dedicated mentors and a wealth of resources.</p>
      </section>

      {/* Pricing Plans and Comparison */}
      <section className="py-16 bg-[#252144] text-white text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Standard Plan */}
          <div className="bg-[#1b1833] p-8 rounded-xl shadow-lg w-full sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold">Standard Plan</h3>
            <p className="mt-4 text-lg">A comprehensive suite of resources and guidance.</p>
            <p className="text-3xl font-bold mt-6">₹499</p>
            <ul className="mt-6 space-y-3 text-left">
              <li>✔️ Comprehensive resources</li>
              <li>✔️ Certification</li>
              <li>✔️ Mentorship</li>
              <li>✔️ Career support</li>
            </ul>
            <button className="mt-8 bg-pink-600 py-3 px-6 rounded hover:bg-pink-700 text-lg transition-all">Get Started</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#1b1833] p-8 rounded-xl shadow-lg w-full sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold">Premium Plan</h3>
            <p className="mt-4 text-lg">All features from Standard Plan plus advanced tools and resources.</p>
            <p className="text-3xl font-bold mt-6">₹1499</p>
            <ul className="mt-6 space-y-3 text-left">
              <li>✔️ Everything in Standard Plan</li>
              <li>✔️ Exclusive access to workshops</li>
              <li>✔️ Advanced tools and resources</li>
              <li>✔️ Networking events</li>
              <li>✔️ 24/7 support</li>
            </ul>
            <button className="mt-8 bg-pink-600 py-3 px-6 rounded hover:bg-pink-700 text-lg transition-all">Get Started</button>
          </div>
        </div>
      </section>

      {/* Full Comparison Section */}
      <section className="py-16 bg-[#252144] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12">Full Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-[#1B1833]">
                  <th className="px-6 py-4 border border-gray-600 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 border border-gray-600 text-center font-bold">Standard Plan - ₹499</th>
                  <th className="px-6 py-4 border border-gray-600 text-center font-bold">Premium Plan - ₹1499</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border border-gray-600">Comprehensive Resources</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✔️</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✔️</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border border-gray-600">Certification</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✔️</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✔️</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border border-gray-600">Exclusive Workshops</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✖️</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✔️</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border border-gray-600">Advanced Tools & Resources</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✖️</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✔️</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border border-gray-600">Networking Events</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✖️</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✔️</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border border-gray-600">24/7 Support</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✔️</td>
                  <td className="px-6 py-4 border border-gray-600 text-center">✔️</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

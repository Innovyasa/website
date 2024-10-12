// src/app/innovyasa/page.tsx
"use client";
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function InnovyasaPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    'Transforming theory into impact',
    'Dynamic learning experiences',
    'Practical skills for professionals',
    'Bridging academia and industry',
    'Theory-driven, practice-focused growth',
    'Advanced implementation strategies',
    'Mastering applied technical skills',
    'Precision guidance for innovation',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div>
      <Navbar />
      <section
        style={{
          padding: '50px 20px',
          background: `
            radial-gradient(54.23% 74.52% at 15% 90%, #A663CC 0%, rgba(166, 99, 204, 0) 100%),
            radial-gradient(54.23% 74.52% at 69.72% -10.08%, #A663CC 0%, rgba(166, 99, 204, 0) 100%), 
            radial-gradient(50.08% 61.33% at 39.72% 107.79%, #A663CC 0%, rgba(166, 99, 204, 0) 100%), 
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
            maxWidth: '84%',
            margin: '0 auto',
          }}
        >
          <h1 className="font-bold"  style={{ fontSize: '56px' }}>
            Innovyasa committed to empowers you through
          </h1>
  
          <div style={{ marginBottom: '30px' }}>
            <ul
              style={{
                listStyleType: 'none',
                padding: '0',
                fontSize: '56px',
                transition: 'opacity 0.5s ease-in-out',
                opacity: '1',
              }}
            >
              <li
                key={currentIndex}
                className="font-bold" style={{
                  opacity: '1',
                  transition: 'opacity 0.5s ease-in-out',
                  fontSize: '56px',
                }}
              >
                {items[currentIndex]}
              </li>
            </ul>
          </div>
          <p style={{ fontSize: '24px' }}>
            At Innovyasa, we are committed to empowering students through dynamic
            learning experiences, expert-led internships, and hands-on project
            guidance. Our mission is to bridge the gap between traditional
            education and real-world skills, equipping learners with the tools
            they need to excel in today’s competitive landscape.
          </p>
          <button>Get started</button>
        </div>
      </section>



      <section style={{ padding: '40px 20px', backgroundColor: '#FFFFFF', color: '#242145' }}>
        <h2>Why Choose Innovyasa?</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>
            <strong>Comprehensive Curriculum:</strong> Our courses are designed by
            industry experts, ensuring that you acquire the most relevant skills
            and knowledge needed to thrive in today’s competitive job market.
          </li>
          <li>
            <strong>Real-World Experience:</strong> With our robust internship programs,
            you gain hands-on experience, working on live projects that enhance
            your learning and make you more employable.
          </li>
          <li>
            <strong>Personalized Guidance:</strong> We believe in nurturing talent. Our
            dedicated mentors provide personalized support, guiding you through
            your academic journey and helping you navigate your career path.
          </li>
          <li>
            <strong>Vibrant Community:</strong> Join a diverse network of motivated learners
            and professionals. At Innovyasa, you’ll collaborate, share ideas,
            and grow alongside like-minded individuals who inspire and challenge you.
          </li>
          <li>
            <strong>Commitment to Excellence:</strong> We are committed to your success.
            Our focus on continuous improvement ensures that you receive the
            highest quality education and resources, empowering you to achieve your goals.
          </li>
          <li>
            <strong>Cutting-Edge Resources:</strong> Innovyasa provides access to the
            latest technologies and tools, enabling you to stay ahead of industry
            trends and enhance your learning experience.
          </li>
        </ul>
      </section>

      <section style={{ padding: '40px 20px', backgroundColor: '#242145', color: '#FFFFFF' }}>
        <h2>Our Offerings</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3>Courses</h3>
            <p>
              Learn from industry experts and gain practical skills in the latest
              technologies. Our courses blend theoretical foundations with
              hands-on applications.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3>Internships</h3>
            <p>
              Hands-on opportunities to apply your skills in real projects. Get
              the experience you need to succeed in the competitive job market.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3>Devsol</h3>
            <p>
              Providing IT solutions for college projects and external clients.
              Engage with hands-on projects and elevate your skills.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 20px', backgroundColor: '#FFFFFF', color: '#242145' }}>
        <h2>Our Approach</h2>
        <p>
          <em>“Find the right data from the right source using the right tools.”</em>
        </p>
        <p>
          Our primary goal is to source the right data from credible origins
          using the appropriate tools, ensuring that every user can discover and
          learn from our comprehensive course offerings. We aim to create an
          environment where users feel they have gained valuable knowledge. The
          data we extract and present is sourced directly from reputable
          websites. By utilizing advanced AI tools, we transform this information
          into a format that is accessible and easy to understand for everyone.
        </p>
      </section>

      <section style={{ padding: '40px 20px', backgroundColor: '#242145', color: '#FFFFFF' }}>
        <h2>Featured Courses</h2>
        <p>Explore some of our popular courses below:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3>Full-Stack Development</h3>
            <p>Master front-end and back-end technologies.</p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3>Machine Learning</h3>
            <p>Get hands-on experience with data science and AI.</p>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3>DevOps</h3>
            <p>Learn how to automate and improve software delivery processes.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

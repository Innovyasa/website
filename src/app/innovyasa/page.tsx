// src/app/innovyasa/page.tsx
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function InnovyasaPage() {
  return (
    <div>
      <Navbar />
      <header
        style={{
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: '#242145',
        }}
      >
        <h1>Welcome to Innovyasa</h1>
        <p>Your gateway to IT courses, internships, and project solutions</p>
      </header>
      <section
        style={{ padding: '40px 20px', backgroundColor: '#242145' }}
      >
        <h2>Our Offerings</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <h3>Courses</h3>
            <p>
              Learn from industry experts and gain practical skills
              in the latest technologies.
            </p>
          </div>
          <div>
            <h3>Internships</h3>
            <p>
              Hands-on opportunities to apply your skills in real
              projects.
            </p>
          </div>
          <div>
            <h3>Devsol</h3>
            <p>
              Providing IT solutions for college projects and
              external clients.
            </p>
          </div>
        </div>
      </section>
      <section
        style={{ padding: '40px 20px', backgroundColor: '#fff', color:'#242145' }}
      >
        <h2>Featured Courses</h2>
        <p>Explore some of our popular courses below</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <h3>Full-Stack Development</h3>
            <p>Master front-end and back-end technologies.</p>
          </div>
          <div>
            <h3>Machine Learning</h3>
            <p>Get hands-on experience with data science and AI.</p>
          </div>
          <div>
            <h3>DevOps</h3>
            <p>
              Learn how to automate and improve software delivery
              processes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

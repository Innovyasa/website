// src/app/(internship)/internship/page.tsx
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
export default function InternshipPage() {
  return (
    <div>
      <Navbar />
      <header style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <h1>Internship Opportunities</h1>
        <p>Gain real-world experience with Innovyasa internships.</p>
      </header>
      <section style={{ padding: '40px 20px' }}>
        <h2>Current Programs</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <h3>Full-Stack Development Internship</h3>
            <p>Work on live projects and enhance your web development skills.</p>
          </div>
          <div>
            <h3>Data Science Internship</h3>
            <p>Apply data analysis techniques to solve real business problems.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

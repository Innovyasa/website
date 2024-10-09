// src/app/(courses)/courses/page.tsx
import Navbar from '@/components/navbar';

export default function CoursesPage() {
  return (
    <div>
      <Navbar />
      <header style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <h1>Innovyasa Courses</h1>
        <p>Explore our wide range of technology courses.</p>
      </header>
      <section style={{ padding: '40px 20px' }}>
        <h2>Available Courses</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <h3>React Development</h3>
            <p>Build dynamic web applications using React.js.</p>
          </div>
          <div>
            <h3>Data Science with Python</h3>
            <p>Dive into data analysis, visualization, and machine learning with Python.</p>
          </div>
          <div>
            <h3>Cloud Computing</h3>
            <p>Learn cloud deployment and infrastructure management.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

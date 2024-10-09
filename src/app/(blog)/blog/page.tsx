// src/app/(blog)/blog/page.tsx
import Navbar from '@/components/navbar';

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <header style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <h1>Innovyasa Blog</h1>
        <p>Stay updated with the latest in IT and technology.</p>
      </header>
      <section style={{ padding: '40px 20px' }}>
        <h2>Recent Posts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3>How to Get Started with Machine Learning</h3>
            <p>Machine learning is transforming industries. Here's how you can get started...</p>
          </div>
          <div>
            <h3>Best Practices for Web Development in 2024</h3>
            <p>Learn about the latest trends and best practices for building modern web applications.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

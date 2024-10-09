// src/app/(devsol)/devsol/page.tsx
import Navbar from '@/components/navbar';

export default function DevsolPage() {
  return (
    <div>
      <Navbar />
      <header style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <h1>Devsol - Project Solutions</h1>
        <p>We provide IT solutions for college projects and clients.</p>
      </header>
      <section style={{ padding: '40px 20px' }}>
        <h2>Services</h2>
        <ul>
          <li>Custom software development</li>
          <li>Web and mobile app development</li>
          <li>Project consulting and mentorship</li>
        </ul>
      </section>
    </div>
  );
}

// src/app/page.tsx
import InnovyasaPage from './(innovyasa)/page';
import Navbar from '@/components/navbar';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <InnovyasaPage />
    </div>
  );
}

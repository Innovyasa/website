// src/app/page.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/innovyasa');
  }, [router]);

  return null; // No content needed as it will redirect immediately
}

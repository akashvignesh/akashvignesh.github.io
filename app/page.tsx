"use client";
import HomePage from '@/src/components/HomePage';
import MainLayout from '@/src/components/MainLayout';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomePage />
      <MainLayout />
    </main>
  );
}

"use client"

import {
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import DashboardHome from "./(root)/main/page";
import Navbar from './components/Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Footer2 from './Footer2';
import Features from './Features';

export default function Home() {

  return (
    <>

      <SignedIn>
        <Navbar />
        <DashboardHome />
      </SignedIn>

      <SignedOut>
        <HeroSection />

        <div className="mb-16">
        </div>

        <Features />
        <Footer />
        <Footer2 />
      </SignedOut>

    </>
  );
}

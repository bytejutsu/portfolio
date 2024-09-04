"use client";


import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import Hero from "@/components/Hero/Hero";
import ContactForm from "@/components/Contact/ContactForm";
import ChatbotWrapper from "@/components/ChatbotWrapper";
import Spline from "@splinetool/react-spline";
import ContactHeaderSection from "@/components/Contact/ContactHeaderSection";
import PartnersSection from "@/components/Partners/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ThreeDimentionSection from "@/components/3D/ThreeDimentionSection";
import ContactSection from "@/components/Contact/ContactSection";


export default function Home() {
    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
      <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow">
              <div className="">
                  <Hero/>
              </div>
              <div className="bg-tertiary">
                  <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
              </div>
              <TestimonialsSection />
              <PartnersSection />
              <ThreeDimentionSection />
              <ContactSection />
          </main>
          <div className="z-10">
              <ChatbotWrapper/>
          </div>
          <div className="bg-primary">
              <Footer/>
          </div>
      </div>
    );
}

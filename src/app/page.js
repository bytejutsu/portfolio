"use client";


import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ChatbotWrapper from "@/components/ChatbotWrapper";
import TechnologiesSection from "@/components/Partners/TechnologiesSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ThreeDimentionSection from "@/components/3D/ThreeDimentionSection";
import ContactSection from "@/components/Contact/ContactSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";


export default function Home() {


    return (
      <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow">
              <div className="">
                  <Hero/>
              </div>
              <ProjectsSection />
              <TestimonialsSection />
              <TechnologiesSection />
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

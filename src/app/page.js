"use client";

import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ChatbotWrapper from "@/components/ChatbotWrapper/ChatbotWrapper";
import TechnologiesSection from "@/components/Partners/TechnologiesSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ThreeDimensionSection from "@/components/3D/ThreeDimensionSection";
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
              <ProjectsSection/>
              <TestimonialsSection/>
              <TechnologiesSection/>
              <ThreeDimensionSection/>
              <ContactSection/>
          </main>
          <div className="z-51"> {/* z index should be greater than the one of the navbar in order to be able to display the chatbot over the navbar on mobile devices*/}
              <ChatbotWrapper/>
          </div>
          <div className="bg-primary">
              <Footer/>
          </div>
      </div>
    );

    {/* trying to retrigger github actions after reconfiguration */}
}

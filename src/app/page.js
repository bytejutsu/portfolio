"use client";


import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import Hero from "@/components/Hero/Hero";

import MyTypewriter from "@/components/MyTypewriter";
import LottieAnimation from "@/components/LottieAnimation";
import Glitch from "@/components/Glitch";
import ContactForm from "@/components/ContactForm";
import getAssetPath from "@/utils/getAssetPath";


import ChatbotWrapper from "@/components/ChatbotWrapper";
import PieChartWrapper from "@/components/PieChartWrapper/PieChartWrapper";
import Testimonials from "@/components/Testimonials";


export default function Home() {
    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
      <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow">
              <div className="bg-primary">
                  <Hero />
              </div>
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              <div className="w-96 h-96">
                <PieChartWrapper/>
              </div>
              <div className="flex justify-center">
                  <MyTypewriter/>
              </div>
              <div className="flex justify-end">
                  <div className="w-96 h-96">
                      <LottieAnimation src={getAssetPath('/lotties/quadcopter.json')}/>
                  </div>
              </div>
              <div className="flex">
                  <Glitch />
              </div>
              <div className="">
                  <Testimonials />
              </div>
              <div>
                  <ContactForm />
              </div>
          </main>
          <div>
              <ChatbotWrapper/>
          </div>
          <div className="bg-primary">
              <Footer/>
          </div>
      </div>
    );
}

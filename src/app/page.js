"use client";


import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import Hero from "@/components/Hero/Hero";
import LottieAnimation from "@/components/LottieAnimation";
import ContactForm from "@/components/ContactForm";
import getAssetPath from "@/utils/getAssetPath";
import ChatbotWrapper from "@/components/ChatbotWrapper";
import PieChartWrapper from "@/components/PieChartWrapper/PieChartWrapper";
import Testimonials from "@/components/Testimonials";
import Spline from "@splinetool/react-spline";
import DonutChart from "@/components/DonutChart/DonutChart";


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
              <div className="bg-primary">
                  <Testimonials/>
                  <div className="flex justify-center">
                      <div className="w-96 h-96">
                          <DonutChart />
                      </div>
                  </div>
              </div>
              <div className="bg-black">
                  <div className="flex justify-end">
                      <div className="w-96 h-96">
                          <LottieAnimation src={getAssetPath('/lotties/quadcopter.json')}/>
                      </div>
                  </div>
              </div>
              <div className="bg-black">
                  <Spline scene="https://prod.spline.design/i8eNphGELT2tDQVT/scene.splinecode"/>
              </div>
              <div>
                  <ContactForm/>
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

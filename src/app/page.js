import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ChatbotWrapper from "@/components/ChatbotWrapper/ChatbotWrapper";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import Hero from "@/components/Hero/Hero";
import PieChart from "@/components/PieChart/PieChart";
import MyTypewriter from "@/components/Typewriter/MyTypewriter";
import LottieAnimation from "@/components/LottieAnimation";
import Glitch from "@/components/Glitch";
import ContactForm from "@/components/ContactForm";
import getAssetPath from "@/utils/getAssetPath";

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
              <PieChart/>
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
              <div>
                  <ContactForm />
              </div>
          </main>
          <ChatbotWrapper/>
          <div className="bg-primary">
              <Footer/>
          </div>
      </div>
    );
}

import Head from "next/head"
import { useState, useEffect } from "react"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"
import Navbar from "@/components/Navbar/Navbar"
import FirstHead from "@/components/Navbar/temp/FirstHead"
import Hero from "@/components/Banner/Hero"
import Man_Women from "@/components/man&weomen/Man_Women"
import TopCollection from "@/components/top_collection/TopCollection"
import MesmericArts from "@/components/Mesmeric Arts/MesmericArts"
import Footer_s from "@/components/Footer_s"
import CartProvider from "@/store/CartProvider"
import ExquisiteHandicrafts from "@/components/Exquisite Handicrafts/ExquisiteHandicrafts"
import IntricateHandlooms from "@/components/Intricate Handlooms/IntricateHandlooms"
import SpecialProduc from "@/components/SpecialProduc/SpecialProduc"
import News from "@/components/news/News"
import Service from "@/components/Service/Service"
import Instagram from "@/components/Instagram/Instagram"
import Icons from "@/components/Icons"


const Home = () => {

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Top Collection Data
  return (
    <CartProvider>
      <div >
        <Head
          title="Home"
          description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
        />
        {/* First Header */}
        <FirstHead />
        <div>
          <Navbar />
        </div>
        {/* Hero Slider */}
        <Hero />
        {/* man&women */}
        <Man_Women />

        {/* Top Collection */}
        <TopCollection />
        {/* MesmericArts */}
        <MesmericArts />
        {/* Exquisite Handicrafts */}
        <ExquisiteHandicrafts />
        <IntricateHandlooms />
        {/* services */}
        <Service />
        <SpecialProduc />
        <Instagram />
        <Icons />
        <News />
        <Footer_s />
        {offset >= 800 && <a href="#" className=" bg-[var(--color-default)] opacity-80 fixed bottom-10 right-4 text-2xl text-slate-50 animate-bounce flex justify-center items-center z-[1000] w-12 h-12 rounded-full"><MdKeyboardDoubleArrowUp /></a>
        }
      </div>
    </CartProvider>
  )
}

Home.getLayout = (page) => {
  return { page }
}

export default Home

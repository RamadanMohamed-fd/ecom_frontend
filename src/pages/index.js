import Head from "next/head"
// import FeaturedProducts from "@modules/home/components/featured-products"
// import Hero from "@modules/home/components/hero"
// import Layout from "@modules/layout/templates"
import { ReactElement, useEffect, useState } from "react"
// import { NextPageWithLayout } from "types/global"

import { RiTruckLine } from "react-icons/ri"
import {
  AiOutlineGooglePlus,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineWifi,
  AiOutlineClockCircle,
  AiFillCreditCard,
} from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

import { ImLocation } from "react-icons/im"
import { IoIosArrowBack, IoIosArrowForward, IoMdCall } from "react-icons/io"
import { FiMail } from "react-icons/fi"
import { FaXRay } from "react-icons/fa"

import { GrAnnounce } from "react-icons/gr"

import { RiLoader3Line } from "react-icons/ri"
import { BsFillCartFill, BsInstagram } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { BsFillPlusCircleFill } from "react-icons/bs"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper";
import Navbar from "@/components/Navbar/Navbar"

const Home = () => {
  const [heroSliderCurr, setHeroSliderCurr] = useState(0)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setHeroSliderCurr((heroSliderCurr + 1) % 3)
    }, 5000)

    return () => clearTimeout(timeOut)
  }, [heroSliderCurr])

  const getHeroSliderContent = () => {
    if (heroSliderCurr === 0) {
      return (
        <div className="relative h-full transition duration-150 ease-in-out">
          <video src="" className="w-full h-full" controls />
        </div>
      )
    } else if (heroSliderCurr === 1) {
      return (
        <div className="flex flex-col justify-center items-center bg-center bg-cover h-full bg-[url('https://images.unsplash.com/photo-1520483984082-37caa3093d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] transition duration-150 ease-in-out">
          <h3 className="font-semibold tracking-[4px] text-white text-[1.2rem]">
            Welcome to Fashion
          </h3>
          <h1 className="text-[2.2rem] text-red-400 font-bold uppercase md:text-[4rem]">
            Women Fashion
          </h1>
          <div className="w-fit px-10 py-2 bg-red-400 text-white">Shop</div>
        </div>
      )
    } else {
      return (
        <div className="flex flex-col justify-center items-center bg-center bg-cover h-full bg-[url('https://images.unsplash.com/photo-1520483984082-37caa3093d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] transition duration-150 ease-in-out">
          <h3 className="font-semibold tracking-[4px] text-white text-[1.2rem]">
            Welcome to Fashion
          </h3>
          <h1 className="text-[2.2rem] text-red-400 font-bold uppercase md:text-[4rem]">
            Men Fashion
          </h1>
          <div className="w-fit px-10 py-2 bg-red-400 text-white">Shop</div>
        </div>
      )
    }
  }

  // Top Collection Data
  const topCollectionProducts = [
    {
      img1: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      img2: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      currImg: 1,
      name: "Black Dress",
      price: "$500",
    },
    {
      img1: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      img2: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      currImg: 1,
      name: "Black Dress",
      price: "$500",
    },
    {
      img1: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      img2: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      currImg: 1,
      name: "Black Dress",
      price: "$500",
    },
    {
      img1: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      img2: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      currImg: 1,
      name: "Black Dress",
      price: "$500",
    },
    {
      img1: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      img2: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      currImg: 1,
      name: "Black Dress",
      price: "$500",
    },
    {
      img1: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      img2: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      currImg: 1,
      name: "Black Dress",
      price: "$500",
    },
    {
      img1: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      img2: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      currImg: 1,
      name: "Black Dress",
      price: "$500",
    },
    {
      img1: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      img2: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      currImg: 1,
      name: "Black Dress",
      price: "$500",
    },
  ]
  return (
    <div className="w-full max-h-[100vh] overflow-y-scroll overflow-x-hidden bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')]">
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      {/* <Hero /> */}
      {/* <FeaturedProducts /> */}

      {/* Code start */}

      {/* Navbar */}
      {/* <Navbar/> */}

      <Navbar />

      <div>
        {/* Header */}
        <div className="flex justify-between items-center px-14 py-3 text-sm bg-red-400 text-white">
          <div className="flex justify-between items-center gap-6">
            <p>Welcome to Our store Multikart</p>
            <p>Call Us: 123-456-7890</p>
          </div>
          <div className="flex justify-between items-center gap-6">
            <p>Wishlist</p>
            <p>My account</p>
          </div>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="h-[400px] md:h-[600px] relative group overflow-hidden">
        <div className="h-full">{getHeroSliderContent()}</div>
        <div className="absolute top-[50%] flex justify-between w-full">
          <span
            onClick={() =>
              setHeroSliderCurr((heroSliderCurr) => (heroSliderCurr - 1) % 3)
            }
            className="text-md p-3 rounded-full cursor-pointer bg-white -translate-x-10 group-hover:translate-x-8 transition duration-150 ease-in-out md:group-hover:translate-x-12"
          >
            <IoIosArrowBack />
          </span>
          <span
            onClick={() =>
              setHeroSliderCurr((heroSliderCurr) => (heroSliderCurr + 1) % 3)
            }
            className="text-md p-3 rounded-full cursor-pointer bg-white translate-x-10 group-hover:-translate-x-8 transition duration-150 ease-in-out md:group-hover:-translate-x-12"
          >
            <IoIosArrowForward />
          </span>
        </div>
      </div>

      {/* categories */}
      <div className="flex w-full gap-3 items-center justify-between flex-col px-14 py-[6rem] bg-white sm:flex-row px-14">
        <div className="flex flex-center items-end w-[97%] h-[240px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] sm:w-[60%]">
          <div className="bg-white px-2 py-4 mx-auto text-center w-[90%] shadow-md -translate-y-8 sm:translate-y-4">
            <h3 className="text-red-400 text-xl font-bold">
              Casual Collection
            </h3>
            <p>Festival Sale</p>
          </div>
        </div>

        <div className="flex flex-center items-end w-[97%] h-[240px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1591980607210-8ea99bee96f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')] sm:w-[60%]">
          <div className="bg-white px-2 py-4 mx-auto text-center w-[90%] shadow-md -translate-y-8 sm:translate-y-4">
            <h3 className="text-red-400 text-xl font-bold">
              Going Out Collection
            </h3>
            <p>Festival Sale</p>
          </div>
        </div>
        <div className="flex flex-center items-end w-[97%] h-[240px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80')] sm:w-[60%]">
          <div className="bg-white px-2 py-4 mx-auto text-center w-[90%] shadow-md -translate-y-8 sm:translate-y-4">
            <h3 className="text-red-400 text-xl font-bold">
              Shoes and Sandle
            </h3>
            <p>New Collection</p>
          </div>
        </div>

      </div>

      {/* Top Collection */}
      <div className="flex items-center justify-center flex-col py-10 w-full bg-white m-0 relative">
        <div className="flex items-center justify-center flex-col w-full">
          <h3 className="text-lg w-full text-center">Special Offer</h3>
          <h1 className="text-[30px] sm:text-[36px] text-center font-bold w-full">TOP COLLECTION</h1>
          <div className="w-[200px] h-[1px] bg-red-400 flex items-center justify-center gap-2">
            <div className="topcollection-heading-line"></div>
            <div className="topcollection-heading-line"></div>
            <div className="topcollection-heading-line"></div>
            <div className="topcollection-heading-line"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-5 w-[90%]">
          {topCollectionProducts.map((product, i) => (
            <div key={i} className="relative h-[550px] w-[100%] shadow-md rounded-md cursor-pointer">
              <div className="group relative w-[100%] h-3/4 overflow-hidden">
                <img
                  className="w-[100%] h-full object-cover rounded-md transition duration-300 ease-in-out"
                  src={product.img1}
                />
                <img
                  className="w-[100%] h-full object-cover absolute top-0 left-0 -translate-x-[100vw] group-hover:translate-x-[0vw] rounded-md transition duration-500 ease-in-out"
                  src={product.img2}
                />
              </div>
              <div>
                <h3 className="text-md text-center">{product.name}</h3>
                <h1 className="text-xl font-semibold text-center">
                  {product.price}
                </h1>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#d0edff]"></div>
                  <div className="w-[15px] h-[15px] rounded-full bg-[#f1e7e6]"></div>
                  <div className="w-[15px] h-[15px] rounded-full bg-[#bfbfbf]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center w-full px-[8rem] py-[10rem]">
        <div className="flex flex-col items-center justify-center bg-gray-50/50 w-3/4 py-8">
          <h1 className="text-red-400 font-bold text-[5rem] uppercase">Kids</h1>
          <h1 className=" font-bold text-[5rem] uppercase">Fashion Trends</h1>
          <h3 className="font-semibold tracking-[4px] text-gray-700 text-[1.5rem]">Special Offer</h3>
          <div className="w-fit px-10 py-2 bg-red-400 text-white">Shop</div>
        </div>
      </div>

      {/* Special Collections */}
      <div className="flex items-center justify-center flex-col py-10 w-full bg-white">
        <div className="flex items-center justify-center flex-col w-2/4">
          <h3 className="text-lg w-full text-center">Special Offer</h3>
          <h1 className="text-[30px] sm:text-[36px] text-center font-bold w-full">TOP COLLECTION</h1>
          <div className="w-1/4 h-[1px] bg-red-400 flex items-center justify-center gap-2">
            <div className="topcollection-heading-line"></div>
            <div className="topcollection-heading-line"></div>
            <div className="topcollection-heading-line"></div>
            <div className="topcollection-heading-line"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 mt-12 gap-5 w-[80%] place-items-center md:grid-cols-2 lg:grid-cols-3">
          {topCollectionProducts.map((product, i) => (
            <div key={i} className="relative h-[180px] w-[95%] shadow-md rounded-md cursor-pointer flex">
              <div className="group relative w-[45%] h-full">
                <img
                  className="w-full h-full object-cover rounded-md transition duration-300 ease-in-out"
                  src={product.img1}
                />
                <img
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 rounded-md transition duration-300 ease-in-out"
                  src={product.img2}
                />
              </div>
              <div className="w-[55%]">
                <h3 className="text-md ml-2">{product.name}</h3>
                <h1 className="text-xl font-semibold ml-2">{product.price}</h1>
                <div className="flex items-center gap-3 border-t-2 ml-2 pt-3">
                  <span>
                    <BsFillCartFill />
                  </span>
                  <span>
                    <AiFillHeart />
                  </span>
                  <span>
                    <BsFillPlusCircleFill />
                  </span>
                  <span>
                    <RiLoader3Line />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* services */}
      <div className="grid items-center grid-cols-1 px-14 py-16 border-t-2 border-b-2 bg-white md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center flex-col mb-14 md:mb-20 lg:mb-0">
          <span className="text-[60px] text-red-400 lg:mb-0">
            <RiTruckLine />
          </span>
          <h3 className="text-lg w-full text-center">Special Offer</h3>
          <p className="text-[30px] sm:text-[36px] text-center font-bold w-full">top collection</p>
        </div>
        <div className="flex items-center flex-col mb-14 md:mb-20 lg:mb-0">
          <span className="text-[60px] text-red-400">
            <AiOutlineClockCircle />
          </span>
          <h3 className="font-bold">FREE SHIPPING</h3>
          <p className="font-sm">free shipping worldwide</p>
        </div>
        <div className="flex items-center flex-col mb-14 md:mb-0">
          <span className="text-[60px] text-red-400">
            <GrAnnounce />
          </span>
          <h3 className="font-bold">FREE SHIPPING</h3>
          <p className="font-sm">free shipping worldwide</p>
        </div>
        <div className="flex items-center flex-col mb-14 md:mb-0">
          <span className="text-[60px] text-red-400">
            <AiFillCreditCard />
          </span>
          <h3 className="font-bold">FREE SHIPPING</h3>
          <p className="font-sm">free shipping worldwide</p>
        </div>
      </div>

      {/* Special Collection */}
      <div className="flex items-center justify-center flex-col py-10 w-full bg-white">
        <div className="flex items-center justify-center flex-col w-2/4 my-10">
          <h3 className="text-lg">Our Collection</h3>
          <h1 className="text-[38px] font-bold">SPECIAL PRODUCTS</h1>
          <div className="w-1/4 h-[1px] bg-red-400 flex items-center justify-center gap-2">
            <div className="w-[10px] h-[10px] bg-red-400"></div>
            <div className="w-[10px] h-[10px] bg-red-400"></div>
            <div className="w-[10px] h-[10px] bg-red-400"></div>
            <div className="w-[10px] h-[10px] bg-red-400"></div>
          </div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="mt-[2rem] px-10">
            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[20ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[40ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[60ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[80ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[100ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[120ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[140ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[160ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[180ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[200ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[220ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[240ms]`}
                  ></div>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[20ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[40ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[60ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[80ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[100ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[120ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[140ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[160ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[180ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[200ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[220ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[240ms]`}
                  ></div>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[20ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[40ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[60ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[80ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[100ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[120ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[140ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[160ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[180ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[200ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[220ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[240ms]`}
                  ></div>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[20ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[40ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[60ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[80ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[100ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[120ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[140ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[160ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[180ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[200ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[220ms]`}
                  ></div>
                  <div
                    className={`h-full w-full bg-red-400/50 scale-0 group-hover:scale-100 origin-top-left transition duration-150 ease-in-out delay-[240ms]`}
                  ></div>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      {/* Instagram */}
      <div className="flex items-center flex-col px-18 py-10 w-full bg-white">
        <h1 className="text-[3rem] font-bold">#INSTAGRAM</h1>
        <div className="flex w-3/4 h-3/4 relative">
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
        </div>
      </div>

      {/* logos */}
      <div className="w-full h-[300px] px-18 py-8 bg-white flex items-center justify-center">
        <div className="flex h-full items-center justify-between gap-5">
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
        </div>
      </div>

      {/* newsletter */}
      <div className="flex flex-col justify-between items-center px-14 py-7 bg-red-400 text-white md:flex-row">
        <div>
          <h3 className="text-md font-bold uppercase">Know it all first</h3>
          <p className="text-sm">
            Never Miss Anything From Multikart By Signing Up To Our Newsletter.
          </p>
        </div>
        <div className="flex gap-4 w-2/4 justify-end">
          <input
            type="text"
            placeholder="Enter your email"
            className="outline-none border-none px-8 py-4 text-sm w-[300px]"
          />
          <button className="text-sm px-10 text-white uppercase font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* footer */}
      <div className="grid grid-cols-4 text-sm px-14 py-12 bg-white gap-20 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <div className="w-full relative h-fit">
          <img
            className="w-3/4 h-[90px] object-cover mb-4"
            src="https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
          />
          <div className="flex flex-col gap-3">
            <p>Lorem ipsum is placeholder text commonly used in</p>
            <p>the graphic, print, and publishing industries for</p>
            <p>previewing layouts and visual mockups.</p>
          </div>
          <div className="flex mt-12 gap-7">
            <span className="text-xl">
              <FaFacebookF />
            </span>
            <span className="text-xl">
              <AiOutlineGooglePlus />
            </span>
            <span className="text-xl">
              <AiOutlineTwitter />
            </span>
            <span className="text-xl">
              <AiOutlineInstagram />
            </span>
            <span className="text-xl">
              <AiOutlineWifi />
            </span>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-lg uppercase font-semibold mb-10">My Account</h3>
          <ul className="flex flex-col gap-6">
            <li>Womens</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Featured</li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-lg uppercase font-semibold mb-10">
            Why We Choose
          </h3>
          <ul className="flex flex-col gap-6">
            <li>Shopping & Return</li>
            <li>Secure Shopping</li>
            <li>Gallery</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-lg uppercase font-semibold mb-10">
            Store Information
          </h3>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-6">
              <span>
                <ImLocation />
              </span>
              <div>
                <p>Multikart Demo Store, Demo</p>
                <p>Store India 345-659</p>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <span>
                <IoMdCall />
              </span>
              <p>Call Us: 123-456-7890</p>
            </li>
            <li className="flex items-start gap-6">
              <span>
                <FiMail />
              </span>
              <p>Email Us: Support@Flot.Com</p>
            </li>
            <li className="flex items-start gap-6">
              <span>
                <FaXRay />
              </span>
              <p>Fax: 123456</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = (page) => {
  return { page }
}

export default Home

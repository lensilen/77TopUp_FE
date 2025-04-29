import React from "react";
import { InputSearch } from "../../components/navigation-bar/input-search";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProductCard } from "../../components/card/product-card";
import { Autoplay } from "swiper/modules";
export const HomePage = () => {
  const { keyword } = useParams();

  return (
    <>
    {/* Hero Section */}
    <section className="bg-pink-200 p-10 py-16 px-10">
        <div className="flex items-center justify-between gap-10">
      </div>

      {/* LEFT - Text */}
      <div className="w-1/2">
      <p className="text-blue-500 font-medium uppercase mb-2">Welcome to 77TopUp</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Topup Murah Proses Cepat</h1>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, aut esse aliquam labore voluptatem cumque laborum. Fuga reiciendis ut laboriosam aut iste facilis voluptates officiis, incidunt itaque nihil nostrum similique!
            </p>
            <div className="w-full">
              <InputSearch />
            </div>
          </div>
  
      {/* RIGHT - IMAGE SWIPER */}
      <div className="w-1/2">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop = {true}
        speed={8000}
        autoplay = {{
          delay : 10000,
          disableOnInteraction: false,
          reverseDirection: false,
          pauseOnMouseEnter: false, 
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide><img src="/77topup_logo_1b.png" alt="" className="w-full"/></SwiperSlide>
      <SwiperSlide><img src="/77topup_logo_1b.png" alt="" className="w-full"/></SwiperSlide>
      <SwiperSlide><img src="/77topup_logo_1b.png" alt="" className="w-full"/></SwiperSlide>
      <SwiperSlide><img src="/77topup_logo_1b.png" alt="" className="w-full"/></SwiperSlide>
      </Swiper>
      </div>
    </section>

    {/* Product Card */}
    <section className="p-10 bg-blue-300">
   <div className="container mx-auto px-4">
    <div className="text-xl font-semibold">Ini Adalah Game</div>
    <div className="grid grid-cols-3 gap-5 mt-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      </div>
    </section>
    </>
  );
};

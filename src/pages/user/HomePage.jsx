import React from "react";
import { InputSearch } from "../../components/navigation-bar/input-search";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProductCard } from "../../components/card/product-card";
export const HomePage = () => {
  const { keyword } = useParams();

  return (
    <>
    <section className="p-10 bg-pink-50">
      {/* Ini adalah Teks */}
      
      <div className="">
        <h1>77TopUp</h1>
        <h1>Ini adalah website 77TopUp</h1>
        <InputSearch/>
      </div>
  
      {/* Image Swiper */}
      <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide><img src="/77topup_logo_1b.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/77topup_logo_1b.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/77topup_logo_1b.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/77topup_logo_1b.png" alt="" /></SwiperSlide>
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

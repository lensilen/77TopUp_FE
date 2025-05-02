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
  <section className="bg-[#A1E3F9] p-10 py-16 px-10">
  <div className="flex items-center justify-between gap-10">
    {/* LEFT - Text */}
    <div className="flex flex-wrap ">
      <p className="text-blue-500 font-medium uppercase mb-2">Welcome to 77TopUp</p>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Topup Murah Proses Cepat</h1>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, aut esse aliquam labore voluptatem cumque laborum. 
        Fuga reiciendis ut laboriosam aut iste facilis voluptates officiis, incidunt itaque nihil nostrum similique!
      </p>
      <div className="w-full">
        <InputSearch />
      </div>
    </div>

    {/* RIGHT - IMAGE SWIPER */}
    <div className="flex items-center justify-between w-1/2">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: false,
          pauseOnMouseEnter: false,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src="/77topup_logo_1b.png" alt="" className="rounded-xl w-full object-cover" /></SwiperSlide>
        <SwiperSlide><img src="/77topup_logo_1b.png" alt="" className="rounded-xl w-full object-cover" /></SwiperSlide>
        <SwiperSlide><img src="/77topup_logo_1b.png" alt="" className="rounded-xl w-full object-cover" /></SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>


    {/* Product Card */}
    <section className="p-10 bg-[#D1F8EF] min-h-screen">
  <div className="container mx-auto px-4">
    
    {/* Judul/Kategori */}
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="bg-[#525FE1] text-white font-semibold px-4 py-2 rounded">
        Game 
      </div>
    </div>

    {/* Card Produk */}
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProductCard image="/public/Genshin_waifu2x_photo_noise3_scale.png"  title="Genshin Impact" />
        <ProductCard image="/public/MLBB.png"  title="Mobile Legends"/>
        <ProductCard image=""  title="PUBG Mobile"/>
        <ProductCard image=""  title="Honkai Star Rail"/>
        <ProductCard image=""  title="Free Fire"/>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

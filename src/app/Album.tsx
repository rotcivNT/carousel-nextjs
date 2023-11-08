"use client";
import { useState } from "react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import AlbumItem from "./AlbumItem";

let images = [
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0163.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0171.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0509.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0526.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0527.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0553.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0027-Recovered.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0065.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0095.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0106.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0111.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0123.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0492.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/Project_06.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0598.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0163.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0223.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0228.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0241+copy.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0241.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0248.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0291.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0301.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0320.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0334.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0429.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0455.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0478.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0604.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0623.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0654.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0717.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0742.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0830.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_9640.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_9647.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_9671.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_9686.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_9687.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_9706.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_9714.jpg",
  "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_9791.jpg",
];

export default function AlbumCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        keyboard={true}
        navigation={true}
        onNavigationNext={({ activeIndex }) =>
        thumbsSwiper && thumbsSwiper.slideTo(activeIndex)
        }
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs, FreeMode]}
        className="mySwiper2"
        lazyPreloadPrevNext={2}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <AlbumItem fill image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 4,
          },
        }}
        
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        watchSlidesProgress={true}
        freeMode={true}
        spaceBetween={20}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <AlbumItem
              onClick={() => thumbsSwiper && thumbsSwiper.slideTo(index)}
              image={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

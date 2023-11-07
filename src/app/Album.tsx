"use client";
import Image from "next/image";
import { useState } from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  let [index, setIndex] = useState(0);
  
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      keyboard={true}
      navigation={true}
      modules={[Pagination, Navigation, EffectFade]}
      className="mySwiper"
      lazyPreloadPrevNext={2}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <AlbumItem image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

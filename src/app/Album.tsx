"use client";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
            "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_9791.jpg"
];

export default function AlbumCarousel() {
  let [index, setIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);
  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full bg-black">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative h-full overflow-hidden">
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              className="flex h-full"
            >
              {images.map((image) => (
                <div key={image} className="w-full h-full relative shrink-0">
                  <Image
                    fill
                    priority
                    sizes="100%"
                    key={image}
                    src={image}
                    alt=""
                    className={`
              duration-700 ease-in-out group-hover:opacity-75 object-contain mx-auto
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                    onLoadingComplete={() => setLoading(false)}
                  />
                </div>
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index - 1)}
                >
                  <div>LEFT</div>
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index + 1)}
                >
                  <div>RIGHT</div>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

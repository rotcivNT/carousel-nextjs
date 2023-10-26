'use client'
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './globals.scss';

interface IProps {
  albumList: any;
}

export default function AlbumCarousel() {
    const albumList =  [
        "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0027-Recovered.jpg",
        "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0065.jpg",
        "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0095.jpg",
        "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0106.jpg",
        "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0111.jpg",
        "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0123.jpg",
        "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0163.jpg",
        "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0171.jpg",
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
        "https://chucphuc.s3.ap-northeast-2.amazonaws.com/users-data/Dung-Denh/HIU_0478.jpg"
    ]
  const renderThumbs = () => {
    return albumList.map((album: any) => (
      <div key={album} className="h-full relative brightness-50 contrast-125 hover:brightness-75 transition">
        <Image src={album} className='object-cover' alt="img" fill sizes="100%" />
      </div>
    ));
  };
  return (
    <Carousel renderThumbs={renderThumbs} showArrows={true} >
                {albumList.map(item => (
                    
                <div key={item}>
                <Image alt='' width={200} height={200} src={item} />
                <p className="legend">Legend 1</p>
            </div>
                ))}
            </Carousel>
  );
}

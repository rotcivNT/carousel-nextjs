import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AlbumCarousel from './Album'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <AlbumCarousel />
    </div>
  )
}

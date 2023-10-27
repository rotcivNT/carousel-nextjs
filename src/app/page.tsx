import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AlbumCarousel from './Album'
import Image from 'next/image'
import AlbumWrapper from './AlbumWrapper';

export default function Home() {
  return (
    <div>
      <AlbumWrapper />
    </div>
  )
}

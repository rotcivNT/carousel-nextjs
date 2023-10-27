'use client'
import {useState,useEffect} from 'react'
import AlbumCarousel from './Album';
function AlbumWrapper() {
    const [isOpenAlbums, setIsOpenAlbums] = useState(false);
  const handleOpenAlbums = () => {
    setIsOpenAlbums(true);
  };
  useEffect(() => {
    // Prevent scroll page when modal open
    document.body.style.overflow = isOpenAlbums ? 'hidden' : '';
  }, [isOpenAlbums]);
    return ( <div>
        <button onClick={handleOpenAlbums}>CLICK</button>
        {isOpenAlbums && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.7)]">
          <AlbumCarousel />
          {/* Close Icon */}
          <div
            onClick={() => setIsOpenAlbums(false)}
            className="cursor-pointer hover:opacity-60 transition absolute top-3 right-3 w-9 h-9 flex justify-center items-center rounded-[50%] bg-[rgba(0,0,0,0.5)]"
          >
            <span className="text-[32px] text-white sm:text-[#837685]">&times;</span>
          </div>
        </div>
      )}
    </div> );
}


export default AlbumWrapper;
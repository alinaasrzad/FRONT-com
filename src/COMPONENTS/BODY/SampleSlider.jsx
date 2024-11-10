// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      
    >
      <SwiperSlide src="https://azarland.com/wp-content/uploads/2024/10/ASUS-Header-1-1.webp">Slide 1</SwiperSlide>
      <SwiperSlide src="https://azarland.com/wp-content/uploads/2024/10/ASUS-Header-1-1.webp">Slide 2</SwiperSlide>
      <SwiperSlide src="https://azarland.com/wp-content/uploads/2024/10/ASUS-Header-1-1.webp">Slide 3</SwiperSlide>
      <SwiperSlide src="https://azarland.com/wp-content/uploads/2024/10/ASUS-Header-1-1.webp">Slide 4</SwiperSlide>
      
    </Swiper>
  );
};
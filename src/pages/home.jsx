import "../CSS/Home.css";
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Import the images
import heroPages from "../assets/BG.jpg";
import Stray from "../assets/Stray.jpg";
function home() {
  return (
    <div>
      <section className="container">
        <div className="heroPage">
          <img src={heroPages} alt="Heropahina" className="Hero" />
        </div>
        <h1 className="mainTitle">NEXUS</h1>
        <h5 className="mainSentence">Gaming beyond Boundaries</h5>
        <a className="mainSentence btnLinks" href="#listGames">
          Play Now!
        </a>
      </section>
      <section className="container">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="wrapper">
              <div className="card">
                <div className="slide">
                  <div className="image">
                    <img src={Stray} alt="Stray"/>
                  </div>
                  <div className="content">
                    <a href="#" className="install">₱584.96</a>
                  </div>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
      </section>
    </div>
  );
}

export default home;

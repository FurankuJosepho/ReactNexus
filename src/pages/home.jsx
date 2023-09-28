import "../CSS/Home.css";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";

//Import the images
import heroPages from "../assets/BG.jpg";
import Stray from "../assets/Stray.jpg";
import Forza from "../assets/Forza.jpg";
import Mir4 from "../assets/Mir4.jpg";
import Sos from "../assets/SOS.jpg";
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
      <section className="container" id="listGames">
      <h4 className="recommendation">Recommendation</h4>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
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
                    <img src={Stray} alt="Stray" />
                  </div>
                  <div className="content">
                    <a href="#" className="install">
                      ₱584.96
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <div className="card">
                <div className="slide">
                  <div className="image">
                    <img src={Forza} alt="Stray" />
                  </div>
                  <div className="content">
                    <a href="#" className="install">
                      ₱584.96
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <div className="card">
                <div className="slide">
                  <div className="image">
                    <img src={Mir4} alt="Stray" />
                  </div>
                  <div className="content">
                    <a href="#" className="install">
                      ₱584.96
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <div className="card">
                <div className="slide">
                  <div className="image">
                    <img src={Sos} alt="Stray" />
                  </div>
                  <div className="content">
                    <a href="#" className="install">
                      ₱584.96
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default home;

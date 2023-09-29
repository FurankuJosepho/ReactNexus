import "../CSS/Home.css";
import Swiper2 from "../components/swiper2";
// import required modules
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

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
          spaceBetween={20}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation]}
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

      <section className="container swiperContainer">
        <h4 className="GenresList">Genre&apos;s List </h4>
        <Swiper2 />
      </section>

      <section className="container boxContainer">
        <div className="box">
          <div className="boxes">
            <h2 className="boxesTitle">
              <a href="">Latest Games</a>
            </h2>
          </div>
          <div className="boxes">
            <h2 className="boxesTitle">
              <a href="">Specials</a>
            </h2>
          </div>
          <div className="boxes">
            <h2 className="boxesTitle">
              <a href="">Free Games</a>
            </h2>
          </div>
          <div className="boxes">
            <h2 className="boxesTitle">
              <a href="">Most Played</a>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;

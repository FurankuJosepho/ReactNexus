import "../CSS/Home.css";
import Swiper2 from "../components/swiper2";
import { useNavigate } from "react-router-dom";
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
function Home() {
  const navigate = useNavigate();
  const undermaintenance = () => {
    alert("This page is undermaintenance")
  }
  return (
    <div className="Parent">
      <section className="container homeContainer">
        <div className="heroPage">
          <img src={heroPages} alt="Heropahina" className="Hero" />
        </div>
        <h1 className="mainTitle">NEXUS</h1>
        <h5 className="mainSentence">Gaming beyond Boundaries</h5>
        <a className="mainSentence btnLinks" href="#listGames">
          Play Now!
        </a>
      </section>
      
      <section className="container recommendContainer" id="listGames">
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
                    <a href="#" className="install" onClick={undermaintenance}>
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
                    <a href="#" className="install" onClick={undermaintenance}>
                      ₱2,999.00
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
                    <a href="#" className="install" onClick={undermaintenance}>
                      Free Install
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
                    <a href="#" className="install" onClick={undermaintenance}>
                      ₱1,050.00
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

      <section className="container liveContainer">
        <h4 className="liveRecomen">Live Recomendation</h4>
          <div className="vidsLive">
          <iframe className="liveHomePage" width="560" height="315" src="https://www.youtube.com/embed/beKRlw2o5kY?si=5JID1aj-SyxCW6_U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          <iframe className="liveHomePage" width="560" height="315" src="https://www.youtube.com/embed/5kS-BicsjS4?si=o8wiE7NnUrwnrUrT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          <iframe className="liveHomePage" width="560" height="315" src="https://www.youtube.com/embed/9jQQYasJTos?si=FYH2uKeziG4jVJfu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          <iframe className="liveHomePage" width="560" height="315" src="https://www.youtube.com/embed/7Sz-kSsgsPQ?si=eBIjBG4GWflNXSAd" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          <iframe className="liveHomePage" width="560" height="315" src="https://www.youtube.com/embed/WuSTvOeGhUo?si=y4cY1nN8I57JyK8Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          <iframe className="liveHomePage" width="560" height="315" src="https://www.youtube.com/embed/zPNjdUlIOTg?si=LeywUsE8_QJQXH-4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <button onClick={() => navigate('/live')} className="ViewMore">View More!</button>
      </section>
    </div>
  );
}

export default Home;

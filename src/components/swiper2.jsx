//Import Swiper2 css
import '../CSS/swiper2.css';
import Swiperbtn from './Swiperbtn';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//Import images
import Fantasy from '../assets/Fantasy.jpg';
import Action from '../assets/Action.png';
import Puzzle from '../assets/Puzzle.png';
import Racing from '../assets/Racing.png';
import Scifi from '../assets/SCi Fi.png';
import Simulation from '../assets/Simulation.png';
import Sports from '../assets/Sports.png';
import Story from '../assets/Story.png';
import Strategy from '../assets/Strategy.png';
import Casual from '../assets/Casual.png';
import Survival from '../assets/Survival.png';

// Import Swiper styles
import "swiper/css";
import "../CSS/Home.css";

// import required modules
import { Pagination } from "swiper/modules";

function swiper2() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}    
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle">Fantasy</h2>
                  <img src={Fantasy} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle">Action</h2>
                  <img src={Action} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle">Puzzle</h2>
                  <img src={Puzzle} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle">Racing</h2>
                  <img src={Racing} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle">SCi Fi</h2>
                  <img src={Scifi} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle">Simulation</h2>
                  <img src={Simulation} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle shortM">Sports</h2>
                  <img src={Sports} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle shortM">Story</h2>
                  <img src={Story} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle">Strategy</h2>
                  <img src={Strategy} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle">Casual</h2>
                  <img src={Casual} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlider2">
          <div className="wrapper3">
            <div className="card3">
              <div className="slide3">
                <div className="image3">
                  <h2 className="genreTitle">Survival</h2>
                  <img src={Survival} alt="Stray" />
                </div>
                <div className="content3">
                  <a href="#" className="install3">
                    Go Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
            <Swiperbtn/>    
      </Swiper>
    </>
  );
}

export default swiper2;

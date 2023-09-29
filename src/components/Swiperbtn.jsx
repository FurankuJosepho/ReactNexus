import { useSwiper } from "swiper/react";
import '../CSS/swiper2.css';
function Swiperbtn() {
    const swiper = useSwiper();
  return (
    <div className="NPbtn">
        <button onClick={() => swiper.slidePrev()} className="Prevbtn">Prev</button>
        <button onClick={() => swiper.slideNext()} className="Nextbtn">Next</button>
    </div>
  )
}

export default Swiperbtn
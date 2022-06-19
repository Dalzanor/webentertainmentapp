import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import TrendingCard from "./TrendingCard";
import { TitleText } from "../style/styled.components";
import { useMedia } from "../utils/media.utils";
import { animated, useTrail } from "react-spring";
import "swiper/css";

const TrendingSwiper = ({ mediaData }) => {
  // Animated Trail
  const trail = useTrail(mediaData.length, {
    config: { mass: 1, tension: 3500, friction: 400 },
    from: { opacity: 0, transform: "translateX(40px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
  });

  // Slides for swiper
  const slides = useMedia(
    ["(min-width: 2440px", "(min-width: 1920px)", "(min-width: 1080px)"],
    [4.25, 3.25, 2.25],
    1.25
  );

  return (
    <>
      <TitleText>Trending Now</TitleText>
      <Swiper
        slidesPerView={slides}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
      >
        {trail.map((style, i) => (
          <SwiperSlide>
            <animated.div key={mediaData[i].title} style={style}>
              <TrendingCard media={mediaData[i]} />
            </animated.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TrendingSwiper;

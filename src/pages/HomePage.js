import CardContainer from "../components/CardContainer";
import TrendingSwiper from "../components/TrendingSwiper";
import { getTrending } from "../utils/media.utils";

const HomePage = ({ mediaData }) => {
  return (
    <>
      <TrendingSwiper mediaData={getTrending(mediaData)} />
      <CardContainer mediaData={mediaData} title="Recommended for you" />
    </>
  );
};

export default HomePage;

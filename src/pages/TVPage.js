import CardContainer from "../components/CardContainer";
import { getTVSeries } from "../utils/media.utils";

const TVPage = ({ mediaData }) => {
  return <CardContainer mediaData={getTVSeries(mediaData)} title="TV Series" />;
};

export default TVPage;

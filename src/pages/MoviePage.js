import CardContainer from "../components/CardContainer";
import { getMovies } from "../utils/media.utils";

const MoviePage = ({ mediaData }) => {
  return <CardContainer mediaData={getMovies(mediaData)} title="Movies" />;
};

export default MoviePage;

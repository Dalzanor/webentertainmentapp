import CardContainer from "../components/CardContainer";
import {
  getBookmarkedMovies,
  getBookmarkedTVSeries,
} from "../utils/media.utils";

const BookmarkPage = ({ mediaData }) => {
  return (
    <>
      <CardContainer
        mediaData={getBookmarkedMovies(mediaData)}
        title="Bookmarked Movies"
      />
      <CardContainer
        mediaData={getBookmarkedTVSeries(mediaData)}
        title="Bookmarked TV Series"
      />
    </>
  );
};

export default BookmarkPage;

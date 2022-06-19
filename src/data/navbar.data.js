import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import TVPage from "../pages/TVPage";
import BookmarkPage from "../pages/BookmarkPage";

import { HomeIcon, MovieIcon, TVIcon, BookmarkIcon } from "./svg.data";

const navData = [
  {
    id: "Home Button",
    linkTo: "/home",
    svgComponent: HomeIcon,
    PageElement: HomePage,
  },
  {
    id: "Movies Button",
    linkTo: "/movies",
    svgComponent: MovieIcon,
    PageElement: MoviePage,
  },
  {
    id: "TV Series Button",
    linkTo: "/tvseries",
    svgComponent: TVIcon,
    PageElement: TVPage,
  },
  {
    id: "Bookmarks Button",
    linkTo: "/bookmarks",
    svgComponent: BookmarkIcon,
    PageElement: BookmarkPage,
  },
];

export default navData;

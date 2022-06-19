import { useEffect, useState } from "react";

export const getTrending = (mediaList) => {
  return mediaList.filter((media) => {
    return media.isTrending === true;
  });
};

export const getMovies = (mediaList) => {
  return mediaList.filter((media) => {
    return media.category === "Movie";
  });
};

export const getTVSeries = (mediaList) => {
  return mediaList.filter((media) => {
    return media.category === "TV Series";
  });
};

export const getBookmarkedMovies = (mediaList) => {
  return mediaList.filter((media) => {
    return media.category === "Movie" && media.isBookmarked === true;
  });
};

export const getBookmarkedTVSeries = (mediaList) => {
  return mediaList.filter((media) => {
    return media.category === "TV Series" && media.isBookmarked === true;
  });
};

export const getBookmarkedMedia = (mediaList) => {
  return mediaList.filter((media) => {
    return media.isBookmarked === true;
  });
};

export const useMedia = (queries, values, defaultValue) => {
  const match = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
  const [value, set] = useState(match);
  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return value;
};

import styled from "styled-components";
import {
  movieSvgPath,
  tvSvgPath,
  playSvgPath,
  fullBookmarkSvgPath,
  emptyBookmarkSvgPath,
} from "../data/svg.data";
import { InlineDot, Bookmark } from "../style/styled.components";

const TrendingCard = ({ media }) => {
  const { title, year, category, thumbnail, rating, isBookmarked } = media;

  return (
    <TrendingCardHero>
      <img
        src={thumbnail.trending.large}
        alt={`Cover art of ${title}`}
        className="thumbnail"
      />
      <div className="position-over">
        <section>
          <p>{year}</p>
          <InlineDot />
          <img
            src={category === "Movie" ? movieSvgPath : tvSvgPath}
            alt={category === "Movie" ? "movie icon" : "tv series icon"}
          />
          <p>{category}</p>
          <InlineDot />
          <p>{rating}</p>
        </section>
        <h1>{title}</h1>
      </div>

      <TrendingPlayHover>
        <button>
          <img src={playSvgPath} alt="play" />
          Play
        </button>
      </TrendingPlayHover>
      <Bookmark>
        <img
          src={isBookmarked ? fullBookmarkSvgPath : emptyBookmarkSvgPath}
          alt={
            isBookmarked
              ? "bookmarked icon checked"
              : "bookmarked icon unchecked"
          }
        />
      </Bookmark>
    </TrendingCardHero>
  );
};

export default TrendingCard;

const TrendingCardHero = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  overflow: hidden;

  .thumbnail {
    border-radius: 8px 8px 8px 8px;
    width: 100%;
    height: 230px;
    object-fit: cover;
  }

  p {
    margin: 0;
    @media (max-width: 800px) {
      font-size: 13px;
    }
    @media (max-width: 600px) {
      font-size: 11px;
    }
    @media (max-width: 530px) {
      font-size: 10px;
    }
    @media (max-width: 360px) {
      font-size: 9px;
    }
  }

  h1 {
    margin: 0;
    color: white;
    font-weight: 500;
    font-size: 18px;
    @media (max-width: 600px) {
      font-size: 15px;
    }
    @media (max-width: 525px) {
      font-size: 14px;
    }
    @media (max-width: 360px) {
      font-size: 12px;
    }
  }

  section {
    height: auto;
    display: flex;
    align-items: center;
    color: white;
    opacity: 0.75;
    img {
      height: 10px;
      margin-right: 5px;
      object-fit: cover;
      filter: invert(90%) sepia(100%) saturate(0%) hue-rotate(159deg)
        brightness(109%) contrast(102%) opacity(0.75);
    }
  }

  .position-over {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;

export const TrendingPlayHover = styled.div`
  height: 230px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  border-radius: 8px 8px 9px 8px;
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 1;
  :hover {
    opacity: 1;
  }
  button {
    color: white;
    height: 48px;
    width: 100px;
    border-radius: 48px;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
  }
`;

import styled from "styled-components";
import {
  movieSvgPath,
  tvSvgPath,
  playSvgPath,
  fullBookmarkSvgPath,
  emptyBookmarkSvgPath,
} from "../data/svg.data";
import { InlineDot, PlayHover, Bookmark } from "../style/styled.components";

const Card = ({ media }) => {
  const { title, year, category, thumbnail, rating, isBookmarked } = media;

  return (
    <CardHero>
      <img
        src={thumbnail.regular.large}
        alt={`Cover art of ${title}`}
        className="thumbnail"
      />
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
      <PlayHover>
        <button>
          <img src={playSvgPath} alt="play" />
          Play
        </button>
      </PlayHover>
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
    </CardHero>
  );
};

export default Card;

const CardHero = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  overflow: hidden;

  .thumbnail {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 174px;
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
`;

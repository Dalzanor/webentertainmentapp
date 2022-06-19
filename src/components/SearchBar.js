import styled from "styled-components";
import { searchSvgPath } from "../data/svg.data";

const SearchBar = ({ getSearchTerm }) => {
  return (
    <SearchField>
      <label htmlFor="searchBar"></label>
      <img src={searchSvgPath} alt="search icon" />
      <input
        type="text"
        id="searchBar"
        placeholder="Search for Movies or TV series"
        onChange={(e) => getSearchTerm(e.target.value)}
      />
    </SearchField>
  );
};

export default SearchBar;

const SearchField = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  @media (max-width: 768px) {
    margin-top: 120px;
  }
  @media (max-width: 340px) {
    margin-top: 80px;
  }
  img {
    opacity: 0.9;
    margin-right: 15px;
  }
  input {
    height: 30px;
    width: 80%;
    color: white;
    font-size: 20px;
    border: none;
    background: transparent;
    :focus {
      outline: none;
    }
  }
`;

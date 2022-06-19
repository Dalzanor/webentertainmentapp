import { NavLink } from "react-router-dom";
import styled from "styled-components";
import navData from "../data/navbar.data";
import { logoSvgPath } from "../data/svg.data";

const NavBar = () => {
  return (
    <Navigation>
      <img src={logoSvgPath} alt="logo" />
      {navData.map(({ id, linkTo, svgComponent }) => {
        return (
          <NavLink key={id} to={linkTo}>
            {svgComponent}
          </NavLink>
        );
      })}
      <img
        src={process.env.PUBLIC_URL + "/assets/image-avatar.png"}
        alt="user icon"
        className="user"
      />
    </Navigation>
  );
};

export default NavBar;

const Navigation = styled.nav`
  height: 80%;
  min-height: 480px;
  width: 96px;
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #161d2f;
  @media (max-width: 768px) {
    height: 72px;
    min-height: 0;
    width: 95%;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
  }
  @media (max-width: 500px) {
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    transform: translateX(0);
    border-radius: 0;
  }

  svg {
    fill: #5a698f;
    height: 20px;
    margin: 20px 0px;
    @media (max-width: 768px) {
      margin: 0 16px;
    }
    @media (max-width: 300px) {
      margin: 0 10px;
    }
    :hover {
      fill: red;
    }
  }

  a.active svg {
    fill: white;
  }

  img {
    margin: 35px 0;
    width: 32px;
    @media (max-width: 768px) {
      margin: 0 auto 0 20px;
    }
    :nth-child(6) {
      margin: auto 0 32px 0;
      border: 1px solid white;
      border-radius: 50%;
      @media (max-width: 768px) {
        margin: 0 20px 0 auto;
      }
    }
  }
`;

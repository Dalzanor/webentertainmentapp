import styled from "styled-components";
import Card from "../components/Card";
import { animated, useTrail } from "react-spring";
import { TitleText } from "../style/styled.components";

const CardContainer = ({ mediaData, title }) => {
  // Animated Trail
  const trail = useTrail(mediaData.length, {
    config: { mass: 0.5, tension: 3500, friction: 200 },
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  return (
    <div style={{ "margin-right": "20px" }}>
      <TitleText>{title}</TitleText>
      <Container>
        {trail.map((style, i) => (
          <animated.div key={mediaData[i].title} style={style}>
            <Card media={mediaData[i]} />
          </animated.div>
        ))}
      </Container>
    </div>
  );
};

export default CardContainer;

const Container = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  margin-top: 30px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 40px;
  @media (min-width: 1450px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding-top: 20px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    padding-top: 30px;
    margin: 24px 0 70px;
  }
  @media (max-width: 300px) {
    grid-template-columns: 1fr;
    padding-top: 0;
    margin: 24px 0 70px;
  }
`;

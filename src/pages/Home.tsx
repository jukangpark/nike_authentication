import styled from "styled-components";
import Header from "../components/Header";

const SlideContainer = styled.div`
  width: 1800px;
  background-color: #f5f5f5;
  height: 800px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <div>
      <Header />
      <SlideContainer></SlideContainer>
    </div>
  );
};

export default Home;

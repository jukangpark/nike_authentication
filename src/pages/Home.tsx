import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";

const SlideContainer = styled.div`
  width: 1800px;
  background-color: #f5f5f5;
  height: 800px;
  margin: 0 auto;
`;

const Home = () => {
  // fetch(
  //   `http://apis.data.go.kr/1471000/CovidDagnsRgntProdExprtStusService/getCovidDagnsRgntProdExprtStusInq?serviceKey=Db2WjUGNkkI1uep4Cdnf1NcQLLXLST05FgSCfSXVPC%2BYIPgFCxyGM9bxZ7EcS7XiKnomAmngmJE%2B5ETJJza1xQ%3D%3D&numOfRows=3&pageNo=1&type=xml`
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  return (
    <div>
      <Header />
      <SlideContainer></SlideContainer>
    </div>
  );
};

export default Home;

//http://apis.data.go.kr/1471000/CovidDagnsRgntProdExprtStusService/getCovidDagnsRgntProdExprtStusInq?serviceKey=서비스키(URL Encode)&numOfRows=3&pageNo=1&type=xml

//Db2WjUGNkkI1uep4Cdnf1NcQLLXLST05FgSCfSXVPC%2BYIPgFCxyGM9bxZ7EcS7XiKnomAmngmJE%2B5ETJJza1xQ%3D%3D

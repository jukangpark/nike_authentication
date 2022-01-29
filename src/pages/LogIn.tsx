import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";

const LogoContainer = styled.div`
  width: 420px;
  height: 70px;
`;

const Logo = styled.img`
  height: 80px;
  margin: 0 auto;
  display: block;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-top: 15px;
  text-align: center;
  margin-bottom: 40px;
  font-weight: bold;
`;

const BtnContainer = styled.div`
  width: 420px;
`;

const Btn = styled.button`
  width: 420px;
  height: 40px;
  margin-top: 10px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Form = styled.form`
  max-width: 420px;
  margin: 0 auto;
`;

const Span = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.accentColor};
  justify-content: stretch;
`;

const Login = () => {
  return (
    <div>
      <Header />
      <div style={{ maxWidth: "420px", margin: "0 auto" }}>
        <LogoContainer>
          <Logo src="/img/logo.png" alt="logo" />
        </LogoContainer>
        <Title>나이키 로그인</Title>

        <Form>
          <Input placeholder="아이디" type="text" />
          <Input placeholder="비밀번호" type="password" />
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <Span>로그인 유지하기</Span>
          </div>
          <BtnContainer>
            <Btn style={{ backgroundColor: "black", color: "white" }}>
              로그인
            </Btn>
            <Btn style={{ backgroundColor: "#FEEC34", color: "black" }}>
              카카오계정 로그인
            </Btn>
            <Btn style={{ backgroundColor: "#2A5886", color: "white" }}>
              페이스북으로 로그인
            </Btn>
          </BtnContainer>

          <Span>회원이 아니신가요?</Span>
          <Link to="/join">회원가입</Link>
          <a href="/#">비회원 주문 조회</a>
        </Form>
      </div>
    </div>
  );
};

export default Login;

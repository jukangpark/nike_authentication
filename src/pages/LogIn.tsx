import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";

const LogoContainer = styled.div`
  width: 420px;
  height: 70px;
`;

const Form = styled.form`
  max-width: 420px;
  margin: 150px auto;
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

const Span = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.accentColor};
  justify-content: stretch;
`;

const ErrorMessage = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  display: block;
  color: ${(props) => props.theme.accentColor};
`;

interface IForm {
  id: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const handleValid = ({ id, password }: IForm) => {
    console.log(id, password);
    console.log(errors);
  };

  console.log(errors);

  return (
    <div>
      <Header />
      <div style={{ maxWidth: "420px", margin: "0 auto" }}>
        <LogoContainer>
          <Logo src="/img/logo.png" alt="logo" />
        </LogoContainer>
        <Title>나이키 로그인</Title>

        <Form onSubmit={handleSubmit(handleValid)}>
          <Input
            {...register("id", {
              required: "Please write your id",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "올바르지 않은 이메일 형식입니다.",
              },
            })}
            placeholder="아이디"
            type="text"
          />
          <ErrorMessage>{errors.id?.message}</ErrorMessage>
          <Input
            style={{
              marginBottom: "0",
            }}
            {...register("password", {
              required: "Please write your password",
            })}
            placeholder="비밀번호"
            type="password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
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
        </Form>
      </div>
    </div>
  );
};

export default Login;

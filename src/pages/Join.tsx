import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";

const Form = styled.form`
  max-width: 420px;
  margin: 150px auto;
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

const BtnContainer = styled.div`
  width: 420px;
`;

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

const Span = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.accentColor};
  text-align: center;
  line-height: 20px;
`;

const ErrorMessage = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  display: block;
  color: ${(props) => props.theme.accentColor};
`;

interface IFormData {
  id: string;
  password1: string;
  password2: string;
  name: string;
  phoneNumber: number;
}

const Join = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormData>();

  const handleValid = ({
    id,
    password1,
    password2,
    name,
    phoneNumber,
  }: IFormData) => {
    if (password1 !== password2) {
      setError("비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    setSuccess("회원가입이 성공적으로 완료되었습니다.");

    setValue("id", "");
    setValue("password1", "");
    setValue("password2", "");
    setValue("name", "");
  };

  console.log(errors);

  return (
    <div>
      <Header />
      <div style={{ maxWidth: "420px", margin: "0 auto" }}>
        <LogoContainer>
          <a href="/">
            <Logo src="/img/logo.png" alt="logo" />
          </a>
          <Title>나이키 회원가입</Title>
          <Span>
            멤버가 되어 나이키가 제공하는
            <br />
            최고의 제품과 혜택을 만나보세요.
          </Span>
        </LogoContainer>

        <Form onSubmit={handleSubmit(handleValid)}>
          <BtnContainer>
            <Btn style={{ backgroundColor: "#FEEC34", color: "black" }}>
              카카오 계정으로 신규 가입
            </Btn>
            <Btn style={{ backgroundColor: "#2A5886", color: "white" }}>
              페이스북 계정으로 신규 가입
            </Btn>
          </BtnContainer>
          <Span style={{ margin: "30px 0" }}>or</Span>
          <Input
            {...register("id", {
              required: "ID를 입력해주세요",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "올바르지 않은 이메일 형식입니다.",
              },
            })}
            placeholder="사용하실 ID를 입력해주세요.(수신 가능 E-mail)"
            type="email"
          />
          <ErrorMessage>{errors.id?.message}</ErrorMessage>

          <Input
            {...register("password1", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*]{10,16}$/,
                message: "올바르지 않은 비밀번호 형태입니다.",
              },
            })}
            placeholder={`영문 대 소문+숫자+특수문자 10~16자리(특수문자 포함 !@#$%^&*)`}
            type="password"
          />
          <ErrorMessage>{errors.password1?.message}</ErrorMessage>

          <Input
            {...register("password2", {
              required: "비밀번호 확인을 입력해주세요",
            })}
            placeholder="패스워드를 다시 입력해주세요."
            type="password"
          />
          <ErrorMessage>{errors.password2?.message}</ErrorMessage>
          <ErrorMessage>{error}</ErrorMessage>

          <Input
            {...register("name", { required: "이름을 입력해주세요" })}
            placeholder="이름을 입력해주세요."
            type="text"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Input
            {...register("phoneNumber", {
              required: "휴대폰 번호를 입력해주세요.",
              pattern: {
                value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                message: "올바르지 않은 전화번호 형태입니다.",
              },
            })}
            placeholder="휴대폰 번호 '-'표 없이 입력해 주세요."
            type="number"
          />
          <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
          <ErrorMessage>{success}</ErrorMessage>
          <Btn
            style={{ backgroundColor: "black", color: "white" }}
          >{`회원가입하기 (만 14세 이상)`}</Btn>
        </Form>
      </div>
    </div>
  );
};

export default Join;

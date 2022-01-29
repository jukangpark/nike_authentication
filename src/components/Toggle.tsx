import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkState } from "../atoms";

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }
  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  input:checked + span:before {
    background-color: #222222;
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Toggle = () => {
  const [isDark, setisDark] = useRecoilState(isDarkState);
  const onClick = () => {
    setisDark((isDark) => !isDark);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Label>
        <input onClick={onClick} type="checkbox"></input>
        <span></span>
      </Label>
    </div>
  );
};

export default Toggle;

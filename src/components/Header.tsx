import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkState } from "../atoms";
import Toggle from "./Toggle";

const Logo = styled.img`
  height: 60px;
  padding-left: 40px;
  justify-content: left;
`;

const LeftMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;

    li {
      text-align: center;
      line-height: 60px;
      font-size: 14px;
      padding: 18px 12px 16px;
      font-weight: bold;
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;

const RightMenu = styled.ul`
  display: flex;
  justify-content: right;
  li {
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    padding: 5px 10px;
  }
`;

const Search = styled.input`
  line-height: 30px;
  width: 180px;
  height: 40px;
  border-radius: 100px;
  border: 0;
  background-color: #f5f5f5;
  ::placeholder {
    font-size: 16px;
    padding-left: 40px;
  }
`;

const Header = () => {
  return (
    <header>
      <RightMenu>
        <li>고객센터</li>
        <li>
          <Link to="/join">멤버 가입</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <Toggle />
      </RightMenu>

      <LeftMenu>
        <Logo src="/img/logo.png" alt="logo" />

        <div>
          <li>New Releases</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
        </div>

        <div>
          <Search placeholder="검색"></Search>
          <span>Heart</span>
          <span>Shop</span>
        </div>
      </LeftMenu>
    </header>
  );
};

export default Header;

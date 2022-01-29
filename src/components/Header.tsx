import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkState } from "../atoms";
import Toggle from "./Toggle";

const Logo = styled.img`
  height: 60px;
  position: absolute;
  left: 40px;
`;

const CenterMenu = styled.ul`
  display: flex;
  box-sizing: border-box;

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
      a:hover {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
`;

const RightMenu = styled.ul`
  display: flex;
  justify-content: right;
  margin-right: 40px;
  li {
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    padding: 5px 10px;
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  right: 40px;
  line-height: 30px;
  padding-right: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: #f5f5f5;
`;

const Search = styled.input`
  border: 0;
  background-color: #f5f5f5;

  ::placeholder {
    font-size: 16px;
    padding-left: 10px;
  }
`;

const SearchButton = styled.label`
  background-color: ${(props) => props.theme.bgColor};
  width: 40px;
  height: 40px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const Header = () => {
  return (
    <header style={{ position: "relative" }}>
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

      <CenterMenu>
        <a href="/">
          <Logo src="/img/logo.png" alt="logo"></Logo>
        </a>

        <div
          style={{
            width: "420px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li>
            <a href="#">New Releases</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
        </div>

        <SearchContainer>
          <SearchButton htmlFor="search">
            <FontAwesomeIcon
              icon={faSearch}
              style={{ height: "25px", cursor: "pointer" }}
            />
          </SearchButton>
          <Search id="search" placeholder="검색"></Search>
        </SearchContainer>
      </CenterMenu>
    </header>
  );
};

export default Header;

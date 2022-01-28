import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isDarkState } from "../atoms";

const Header = () => {
  const [isDark, setisDark] = useRecoilState(isDarkState);
  const onClick = () => {
    setisDark((isDark) => !isDark);
  };

  return (
    <header>
      <ul>
        <li>고객센터</li>
        <li>
          <Link to="/join">멤버 가입</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <button onClick={onClick}>
          {isDark ? "Light Theme" : "Dark Theme"}
        </button>
      </ul>
      <ul>
        <li>New Releases</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Sale</li>
      </ul>
      <button>Search</button>
      <button>Heart</button>
      <button>Shop</button>
    </header>
  );
};

export default Header;

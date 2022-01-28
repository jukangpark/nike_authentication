import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>나이키 멤버 가입</h1>
        <h2>멤버가 되어 나이키가 제공하는 최고의 제품과 혜택을 만나보세요.</h2>
        <button>카카오 계정으로 신규 가입</button>
        <button>페이스북 계정으로 신규 가입</button>
        <span>or</span>

        <form>
          <input placeholder="아이디" />
          <input placeholder="비밀번호" />
          <div>
            <input type="checkbox" />
            <span>로그인 유지하기</span>
            <span>아이디/비밀번호 찾기</span>
          </div>
          <button>로그인</button>
          <button>카카오계정 로그인</button>
          <button>페이스북으로 로그인</button>
          <span>회원이 아니신가요?</span>
          <Link to="/join">회원가입</Link>
          <a href="/#">비회원 주문 조회</a>
        </form>
      </div>
    </div>
  );
};

export default Login;

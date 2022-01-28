import Header from "../components/Header";

const Join = () => {
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
          <input placeholder="사용하실 ID를 입력해주세요.(수신 가능 E-mail)" />
          <input placeholder="영문 대 소문+숫자+특수문자 8~16자리(괄호(),<> 사용 불가)" />
          <input placeholder="패스워드를 다시 입력해주세요." />
          <input placeholder="이름을 입력해주세요." />
          <input placeholder="휴대폰 번호 '-'표 없이 입력해 주세요." />
          <button>{`회원가입하기 (만 14세 이상)`}</button>
        </form>
      </div>
    </div>
  );
};

export default Join;

import "./App.css";
import ProfileCard from "./components/ProfileCard";
import profileImg from "./assets/images/beans.png";

function App() {
  return (
    <div className="main-container">
      <h1 className="title">임우정의 리액트 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="임우정"
        description="신소재를 사랑하는 개발자입니다."
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://github.com/limwoojeong-96/coffe.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 커피
        </a>
      </div>
    </div>
  );
}

export default App;

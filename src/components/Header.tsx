import React from "react";

const Header = () => {
  const test:string = "22";

  return (
    <header>
      <h1>
        <a href="./">GPT English</a>
      </h1>
      <ul>
        <li>대화하기</li>
        <li>기록하기</li>
      </ul>
      <button>로그인</button>
    </header>
  );
};

export default Header;

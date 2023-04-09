import React from "react";
import styled from "styled-components";

const Header = () => {
  const test:string = "22";

  return (
    <HeaderContainer>
      <div className="header-gnb">
        <h1>
          <a href="./">GPT English</a>
        </h1>
        <ul>
          <li>대화하기</li>
          <li>기록하기</li>
        </ul>
      </div>
      <button type="button">로그인</button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: rgba(0, 117, 255, 0.08);
  padding: 0 80px;
  
  
  .header-gnb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #0D83FF;
      font-weight: 700;
      font-size: 24px;
      line-height: 34.75px; 
      letter-spacing: -0.05em;
      margin-right: 115px;
    }
    ul {
      display: flex;
      justify-content: space-between;
      li {
        margin-right: 60px;
        font-size: 15px;
        line-height: 22px;
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
  button {
    font-size: 15px;
    line-height: 22px;
  }
`;

export default Header;

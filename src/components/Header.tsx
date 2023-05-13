import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const test:string = "22";

  return (
    <HeaderContainer>
      <div className="header-gnb">
        <h1>
          <Link to="/">GPT English</Link>
        </h1>
        <ul>
          <li>
            <Link to='/tainen'>대화하기</Link>
          </li>
          <li>
            <Link to='/reinen'>기록하기</Link>
          </li>
        </ul>
      </div>
      <Link to='/login'>로그인</Link>
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
    h1>a {
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
        line-height: 22px;
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
  a {
    font-size: 13px;
    line-height: 22px;
  }
`;

export default Header;

import React from 'react';
import styled from 'styled-components';
import Btn from 'styled/GlobalStyle';

const Signup = () => {

  return (
    <SignupContainer>
      <div className='signup-box'>
        <h2>GPT English</h2>
        <form className='signup-form'>
          <h3>회원가입</h3>
          <div className='signup-form-main'>
            <label>이름</label>
            <input type='text'/>
            <label>생년월일</label>
            <input type='text'/>
            <label>아이디</label>
            <input type='text'/>
            <label>비밀번호</label>
            <input type='password'/>
            <label>비밀번호 확인</label>
            <input type='password'/>
          </div>
          <Btn type="button">회원가입</Btn>
        </form>
      </div>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
height: calc(100% - 130px);
display: flex;
align-items: center;
justify-content: center;

.signup-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 798px;
  height: 639px;
  border-radius: 26px;
  background-color: #F3F9FF;

  h2 {
    position: absolute;
    top: -36px;
    left: 25px;
    font-size: 48px;
    font-weight: 700;
    color: #0D83FF;
  }
  h2::after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 60%;
    left: 102%;
    width: 460px;
    height: 3px;
    background-color: #0D83FF;
  }

  .signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-weight: 700;
      font-size: 24px;
      letter-spacing: -0.05em;
      margin-bottom: 95px;
    }
    .signup-form-main {
      display: grid;
      grid-template-columns: 100px 315px;
      gap: 36px 40px;
      margin-bottom: 75px;
      label {
        font-size: 15px;
        letter-spacing: -0.05em;
        text-align: right;
      }
    }
  }
}

`;

export default Signup;
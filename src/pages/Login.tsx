import React from 'react';
import styled from 'styled-components';
import Btn from 'styled/GlobalStyle';

const Login = () => {

  return (
    <LoginContainer>
      <div className='login-box'>
        <h2>GPT English</h2>
        <form className='login-form'>
          <h3>로그인</h3>
          <div className='login-form-main'>
            <label>아이디</label>
            <input type='text'/>
            <label>비밀번호</label>
            <input type='password'/>
          </div>
          <div className='login-form-btns'>
            <Btn type="button">회원가입</Btn>
            <Btn type="button">로그인</Btn>
          </div>
        </form>
      </div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  height: calc(100% - 130px);
  display: flex;
  align-items: center;
  justify-content: center;

  .login-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 798px;
    height: 502px;
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

    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-weight: 700;
        font-size: 24px;
        letter-spacing: -0.05em;
        margin-bottom: 95px;
      }
      .login-form-main {
        display: grid;
        grid-template-columns: 60px 330px;
        gap: 36px 40px;
        margin-bottom: 75px;
        label {
          font-size: 15px;
          letter-spacing: -0.05em;
          text-align: right;
        }
      }
      .login-form-btns {
        button:first-child {
          margin-right: 26px;
        }
      }
    }
  }
`;

export default Login;
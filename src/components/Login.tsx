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
          <div>
            <label>아이디</label>
            <input type='text'/>
            <label>비밀번호</label>
            <input type='password'/>
          </div>
          <div>
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
    width: 798px;
    height: 502px;
    border-radius: 26px;
    background-color: #F3F9FF;
  }
`;

export default Login;
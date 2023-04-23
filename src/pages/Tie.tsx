import TieChat from 'components/TieChat';
import React from 'react';
import styled from 'styled-components';
import Btn from 'styled/GlobalStyle';

const Tie = () => {
  return (
    <TieContainer>
      <Btn className='rec-btn'>기록하기</Btn>
      <div className='tie-container'>
        <TieChat />
      </div>
      <form className='tie-form'>
        <input type="text" />
        <Btn>보내기</Btn>
      </form>
    </TieContainer>
  );
};

const TieContainer = styled.div`
  position: relative;
  height: calc(100% - 130px);

  .rec-btn {
    position: absolute;
    top: 14px;
    right: 24px;
    width: auto;
    height: auto;
    padding: 15px 64px;
    border-radius: 8px;
  }
  .tie-container {
    height: calc(100% - 124px);
    padding: 0 151px;
    padding-top: 50px;
    overflow-y: auto;
    /* border: 1px solid red; */
  }
  .tie-form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 12px 36px;
    input {
      box-sizing: border-box;
      width: calc(100% - 152px);
      height: 46px;
      border: 1px solid #E0E0E0;
      border-radius: 5px;
      padding: 3px;
    }
    button {
      width: 136px;
      height: 50px;
      border-radius: 8px;
      margin-left: 16px;
    }
  }
`;

export default Tie;
import TieChat from 'components/TieChat';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Btn from 'styled/GlobalStyle';

const Tie:React.FC = () => {
  const [render, setRender] = useState<boolean>(false);
  const [chat, setChat] = useState<JSX.Element>();
  const [userChat, setUserChat] = useState<JSX.Element>();


  const sendInpt = () => {
    
    if(userChat === undefined) {
      return;
    }
    console.log('^^')
  }
  const setInptTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserChat(<p>{e.target.value}</p>);
  }

  useEffect(()=> {
    let txt = <p>안녕하세요, 저는 GPT English 원어민 담당 GPT Bot입니다 !<br/>
      저와 대화를 실행하여 여러분의 영어 실력을 향상시킬 수 있습니다.<br/>
      먼저 대화를 실행하기 위해 <strong style={{'color': '#0D83FF'}}>“Hello GPT”</strong> 명령어를 입력해 주십시오. 그럼 저는 당신을 위한 여러가지 주제를 추천해 드립니다.<br/>
      해당 주제에 대해 이야기하며 작문실력을 향상시키고 좀 더 나은 문장을 찾을 수 있습니다. </p>;
    setChat(txt);
    setRender(true);
  }, [])

  return (
    <TieContainer>
      <Btn className='rec-btn'>기록하기</Btn>
      <div className='tie-container'>
        {
          render && chat
          ? <TieChat 
              isUser={false}
              chat={chat}
            />
          : null
        }
        <TieChat
          isUser={true}
          chat={<p>??????</p>}
        />
      </div>
      <form className='tie-form'>
        <input type="text" onChange={setInptTxt} />
        <Btn type="button" onClick={sendInpt}>보내기</Btn>
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
    padding: 10px 40px;
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
      padding: 3px 15px;
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
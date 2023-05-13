import React from 'react';
import styled from 'styled-components';

type TieChatProps = {
  isUser: boolean;
  chat: JSX.Element;
}

const TieChat:React.FC<TieChatProps> = ({isUser, chat}) => {
  return (
    <TieChatContainer isUser={isUser} chat={chat}>
      <img src={isUser?'/imgs/chat-user-icon.png' :'/imgs/chat-bot-icon.png'} alt='chat' />
      <div>
        {chat}
      </div>
    </TieChatContainer>
  );
};

const TieChatContainer = styled.div<TieChatProps>`
  display: flex;
  flex-direction: ${(props) => 
    props.isUser 
    ? 'row-reverse'
    : 'row'
  };
  align-items: flex-end;
  width: 100%;
  margin-bottom: 18px;
  line-height: 20.27px;
  
  img {
    width: 94px;
    height: 94px;
    margin-right: ${(props) => props.isUser ? '0' : '42px'};
    margin-left: ${(props) => props.isUser ? '42px' : '0'};
  }
  div {
    max-width: 787px;
    padding: 32px 60px;
    border-radius: 8px; 
    background-color: ${(props) => props.isUser ? '#F3F3F3' : '#EBF4FF'};
    font-size: 13px;
    letter-spacing: -0.045em;
  }

`

export default TieChat;
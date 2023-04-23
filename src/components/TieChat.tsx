import React from 'react';
import styled from 'styled-components';

const TieChat = () => {
  return (
    <TieChatContainer>
      <img src='/imgs/chat-bot-icon.png' alt='chat' />
      <div></div>
    </TieChatContainer>
  );
};

const TieChatContainer = styled.div`
  display: flex;
  align-items: flex-end;

  img {
    width: 94px;
    height: 94px;
    margin-right: 42px;
  }
  div {
    padding: 32px 60px;
    border-radius: 8px;
  }
`

export default TieChat;
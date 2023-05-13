import React from 'react';
import styled from 'styled-components';
import Btn from 'styled/GlobalStyle';

const Main = () => {
  return (
    <MainContainer>
      <section className='main-sec-1'>
        <div>
          <span className='main-sub-title'>ChatGPT와 영어 공부하기</span>
          <p>
            영어공부, 미뤄만 오셨나요?<br/>
            당신의 영어 공부를 도와줄 GPT English!<br/>
            <br/>
            ChatGPT를 사용해 당신의 학습을 도와드립니다.<br/>
            지금 바로 사용법을 알아보세요!
          </p>
        </div>
        <img src='/imgs/main-bot.png' alt='ChatGPT' className='main-bot-img' />
      </section>
      <section className='main-sec-2'>
        <span className='main-sub-title'>
          미뤄만 왔던 영어공부,<br/>지금 GPT English와 함께 시작해요.
        </span>
        <div>
          <div>
            <img src='/imgs/chat-icon-1.png' alt='대화형 영어 회화 트레이닝' />
            <p>대화형 영어 회화 트레이닝</p>
          </div>
          <div>
            <img src='/imgs/chat-icon-2.png' alt='문법과 어휘 학습' />
            <p>문법과 어휘 학습</p>
          </div>
          <div>
            <img src='/imgs/chat-icon-3.png' alt='영어 독해 연습' />
            <p>영어 독해 연습</p>
          </div>
          <div>
            <img src='/imgs/chat-icon-4.png' alt='문장 연습과 쓰기' />
            <p>문장 연습과 쓰기</p>
          </div>
        </div>
      </section>
      <section className='main-sec-3'>
        <span className='main-sub-title'>
          ChatGPT와의 영어공부,<br/>어떻게 시작해야 할까요?
        </span>
        <div>
          <div>
            <img src='./imgs/rect-example.png' alt='' />
            <p>GPT English가 제시해주는 다양한 주제로 chatGPT와 대화할 수 있습니다.</p>
          </div>
          <div>
            <img src='./imgs/rect-example.png' alt='' />
            <p>GPT English가 알려주는 제시어로 문장의 정확도를 확인할 수 있습니다.</p>
          </div>
          <div>
            <img src='./imgs/rect-example.png' alt='' />
            <p>GPT English가 알려주는 제시어로 문장의 정확도를 확인할 수 있습니다.</p>
          </div>
          <div>
            <img src='./imgs/rect-example.png' alt='' />
            <p>GPT English가 알려주는 제시어로 문장의 정확도를 확인할 수 있습니다.</p>
          </div>
        </div>
      </section>
      <section className='main-sec-4'>
        <span className='main-sub-title'>
          이제 시작할 수 있습니다.<br/>
          GPT English와 함께 원어민과 대화하는 것 같은 생생한 대화를 나눠보세요!
        </span>
        <Btn>시작하기</Btn>
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  section {
    padding: 98px 0;
    border-bottom: 1px solid #82A6DC;
  }
  section:last-child {
    border: none;
  }
  .main-sub-title {
    position: relative;
    left: 230px;
    display: inline-block;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.04em;
    margin-bottom: 33px;
  }
  .main-sec-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    .main-sub-title {
      left: 0;
    }
    .main-bot-img {
      width: 418px;
      height: 385px;
      margin-left: 175px;
    }
  }
  .main-sec-2 {
    &>div {
      position: relative;
      left: -36px;
      display: flex;
      justify-content: center;
      align-items: center;
      &>div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 346px;
        height: 346px;
        border-radius: 50%;
        background-color: rgba(0, 117, 255, 0.08);

        img {
          width: 160px;
          height: 160px;
          margin-bottom: 25px;
        }
        p {
          font-size: 15px;
        }
      }
      &>div:nth-child(1) {
        left: 108px;
      }
      &>div:nth-child(2) {
        left: 72px;
      }
      &>div:nth-child(3) {
        left: 36px;
      }
      &>div:nth-child(2), &>div:nth-child(4) {
        background-color: rgba(160, 160, 160, 0.2);
      }
    }
  }
  .main-sec-3 {
    &>div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      /* row-gap: 47px; */
      gap: 47px;
      padding: 0 175px;

      &>div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 516px;
          height: 306px;
          margin-bottom: 7px;
        }
        p {
          font-size: 15px;
        }
      }
      &>div:nth-child(1), &>div:nth-child(3) {
        justify-self: end; 
      }
      &>div:nth-child(2), &>div:nth-child(4) {
        justify-self: baseline; 
      }
    }
  }
  .main-sec-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main-sub-title {
      left: 0;
      margin-bottom: 64px;
    }
    button {
      width: 335px;
      height: auto;
      padding: 14px 0;
      margin-bottom: 66px;
    }
  }
`;

export default Main;
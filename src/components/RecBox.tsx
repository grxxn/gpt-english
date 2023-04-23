import React from 'react';
import styled from 'styled-components';

const RecBox = () => {
  return (
    <RecBoxContainer>
      <span>2023.03.23 (일)</span>
      <button className='rec-close-btn'>X</button>
      <div className='rec-contour'></div>
      <p className='rec-sentence'>I admire the music.</p>
      <p className='rec-trans'>난 그 음악을 너무 좋아해.</p>
    </RecBoxContainer>
  );
};

const RecBoxContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  background-color: #EBF4FF;
  padding: 20px 29px;
  font-size: 14px;
  letter-spacing: -0.045em;
  
  span {
    display: inline-block;
  }
  .rec-contour {
    width: 100%;
    height: 1px;
    background-color: #0D83FF;
    margin: 15px 0;
  }
  .rec-close-btn {
    position: absolute;
    top: 19px;
    right: 30px;
  }
  .rec-sentence {
    margin-bottom: 3px;
  }
`;

export default RecBox;
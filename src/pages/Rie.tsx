import RecBox from 'components/RecBox';
import React from 'react';
import styled from 'styled-components';

const Rie = () => {
  return (
    <RieContainer>
      <span className='recDate'>2023.03.23 (일)</span>
      <RecBox />
    </RieContainer>
  );
};

const RieContainer = styled.div`
  box-sizing: border-box;
  height: calc(100% - 130px);
  padding: 55px 174px;
  overflow-y: auto;

  .recDate {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.045em;
    margin-bottom: 26px;
  }
`

export default Rie;
import React from 'react';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';

import TrashCard from './TrashCard';
import {garbageState} from '../Store';
import type {Card} from '../Store';

const GarbageList =()=> {
  const garbageData: Card[] = useRecoilValue(garbageState);
  return (
    <Container>
      <TrashTitle>쓰레기 통</TrashTitle>
      {garbageData.length > 0 ? 
        garbageData.map((item, index)=>{
          return <TrashCard id={item.id} title={item.title} text={item.text} key={index}/>
        })
        :
        null
      }
    </Container>
  )
}

const TrashTitle = styled.h2`
  color: red;
`;

const Container = styled.div`
  display: flex;
  padding: 20px, 100px, 20px, 100px;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export default GarbageList;
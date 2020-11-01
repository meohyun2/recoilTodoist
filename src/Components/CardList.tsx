import React from 'react';
import {atom, RecoilState} from 'recoil';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';

import Card,{CardProps} from './Card';

export const cardListState: RecoilState<CardProps[]> = atom({
  key: 'CardList',
  default: [] as CardProps[],
});

const CardList =()=> {
  const cardData: CardProps[] = useRecoilValue(cardListState);
  return (
    <Container>
      {cardData.length > 0 ? 
        cardData.map((item, index)=>{
          return <Card title={item.title} text={item.text} key={index}/>
        })
        :
        null
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 20px, 100px, 20px, 100px;
  flex-direction: column;
`;

export default CardList;
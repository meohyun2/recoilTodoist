import React from 'react';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';

import CardItem from './Card';
import {cardListState} from '../Store';
import type {Card} from '../Store';

const CardList =()=> {
  const cardData: Card[] = useRecoilValue(cardListState);
  return (
    <Container>
      {cardData.length > 0 ? 
        cardData.map((item, index)=>{
          return <CardItem id={item.id} title={item.title} text={item.text} key={index}/>
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
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export default CardList;
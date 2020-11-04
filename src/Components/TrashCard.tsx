import React from 'react';
import styled from 'styled-components';

import type {Card} from '../Store';
// 아톰을 받아서 이를 띄워주는 리스트를 생성하자. 그리고 이를 삭제할 수 있는 버튼을 추가한다.

const TrashCardItem =({title, text, id}: Card)=> {
  return(
    <Container>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </Container>
  )
}

const CardTitle = styled.h1`
`;

const CardText = styled.h5``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 20px;
  background-color: pink;
  border-width: 1px;
  border-color: gray;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export default TrashCardItem;
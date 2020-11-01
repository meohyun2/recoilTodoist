import React from 'react';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';

import type {Card} from '../Store';
import {cardListState} from '../Store';
// 아톰을 받아서 이를 띄워주는 리스트를 생성하자. 그리고 이를 삭제할 수 있는 버튼을 추가한다.

const CardItem =({title, text, id}: Card)=> {
  const [todoList, setTodoList] = useRecoilState(cardListState);
  const deleteId = todoList.findIndex((item)=> item.id === id);

  const onClickDeleteButton = (): void => {
    setTodoList([...todoList.slice(0,deleteId), ...todoList.slice(deleteId+1)])
  }

  return(
    <Container>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <DeleteButton onClick={onClickDeleteButton}>삭제하기</DeleteButton>
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
  background-color: gainsboro;
  border-width: 1px;
  border-color: gray;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const DeleteButton = styled.button`
  background-color: azure;
  border-width: 0px;
  border-radius: 20px;
  margin: 10px;
`;

export default CardItem;
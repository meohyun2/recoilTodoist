import React from 'react';
import styled from 'styled-components';
import {selector, useRecoilValue} from 'recoil';
import {todoItem} from './Editor';
// 아톰을 받아서 이를 띄워주는 리스트를 생성하자. 그리고 이를 삭제할 수 있는 버튼을 추가한다.

const editorDerivedState = selector({
  key: 'cardText',
  get: ({get}) => {
    return get(todoItem);
  }
}) 

const Card =()=> {
  return(
    <Container>
      {useRecoilValue(editorDerivedState)}
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background-color: gainsboro;
    border-width: 1px;
    border-color: gray;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export default Card;
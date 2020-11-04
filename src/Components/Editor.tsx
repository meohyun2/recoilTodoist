import React, {useState} from 'react';
import styled from 'styled-components';
import {useSetRecoilState} from 'recoil';

import {cardListState} from '../Store';

interface EditorState {
  title: string;
  text: string;
}

let id: number = 0;

const getId = (): number => {
  return id++;
}

const Editor =()=> {
  const [todoData, setTodoText] = useState<EditorState>({
    title: '',
    text: '',
  });
  const setCardListState = useSetRecoilState(cardListState);

  const onChangeTitleEditor =(event: any)=> {
    setTodoText({
      ...todoData,
      title: event.target.value,
    });
  }

  const onChangeTextEditor =(event: any)=> {
    setTodoText({
      ...todoData,
      text: event.target.value,
    })
  }

  const onSubmitEditor = (): any => {
    setCardListState((currentList)=>{
      return [
        ...currentList,
        {
          title: todoData.title,
          text: todoData.text,
          id: getId(),
          date: new Date()
        }
      ];
    });
    setTodoText({title: '', text: ''});
  }

  return(
    <Container>
      <Title>Input Your Todo, and submit it</Title>
      <FormContainer>
        <Textfield placeholder="투두 제목" type="text" value={todoData.title} onChange={onChangeTitleEditor}/>
        <Textfield placeholder="투두 내용" type="text" value={todoData.text} onChange={onChangeTextEditor}/>
        <SubmitButton onClick={onSubmitEditor}>Submit</SubmitButton>
      </FormContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  height: 100%;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Textfield = styled.input`
  width: 100%;
  height: 20px;
  margin: 10px;
`;

const Title = styled.h1`
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
  background-color: palevioletred;
  border-radius: 10px;
`;

export default Editor;
import React from 'react';
import {useRecoilState, atom} from 'recoil';

export const todoItem = atom({
  key: 'todoText',
  default: '',
});

const Editor =()=> {
  const [todoText, setTodoText] = useRecoilState(todoItem);

  const onChangeEditor =(event: any)=> {
    setTodoText(event.target.value);
  }

  return(
    <div>
      <input type="text" value={todoText} onChange={onChangeEditor}/>
    </div>
  )
}

export default Editor;
import React from 'react';
import styled from 'styled-components';

import Editor from '../Components/Editor';
import CardList from '../Components/CardList';

const ReactTodoist =()=> {
  return(
    <div>
      <Editor/>
      <CardList/>
    </div>
  )
}

export default ReactTodoist;
import React from 'react';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';

import {garbageDestroyer} from '../Store/selector';

const GarbageDestory =()=> {
  const [garbageState, resetGarbage] = useRecoilState(garbageDestroyer);
  return(
    <Button onClick={()=>{resetGarbage(garbageState)}}>휴지통 비우기</Button>
  )
}

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: green;
`;

export default GarbageDestory;
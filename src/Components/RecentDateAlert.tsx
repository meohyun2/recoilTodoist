import React from 'react';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';

import {getRecentCard} from '../Store/selector';

const RecentDateAlert =()=> {
  const {recentCard} = useRecoilValue(getRecentCard);
  const onClickButton =()=> {
    alert(recentCard?.date || '최근 사용 내역 없음');
  }
  return(
    <AlertButton onClick={onClickButton}>
      최근 리스트 추가 시간
    </AlertButton>
  )
}

const AlertButton = styled.button`
  background-color: powderblue;
  border-radius: 20px;
  width: 200px;
  height: 50px;
`;

export default RecentDateAlert;
import {selector} from 'recoil';
import {Card, cardListState} from './atoms';

export const getRecentCard = selector({
  key: "showRecentUsedTime",
  get: ({get}) => {
    const todoList = get(cardListState);
    const recentCard = todoList[todoList.length-1];
    return {
      recentCard
    }
  }
})
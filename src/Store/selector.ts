import {selector} from 'recoil';
import {Card, cardListState, garbageState} from './atoms';

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

export const garbageDestroyer = selector({
  key: "garbageDestoryer",
  get: ({get}) => {
    return garbageState;
  },
  set: ({set}): void => set(garbageState, [])
});
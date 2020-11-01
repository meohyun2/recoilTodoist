import {atom, RecoilState} from 'recoil';

export interface Card {
  title: string;
  text: string;
  id: number;
  date?: Date;
}

export const cardListState: RecoilState<Card[]> = atom({
  key: 'CardList',
  default: [] as Card[],
});
import { AppRootState } from '../../app/store.ts'
import { ItemsResponseType } from './decks-api.ts'

export const decksSelector = (state: AppRootState): ItemsResponseType[] => {
  return state.decksReducer.decks
}
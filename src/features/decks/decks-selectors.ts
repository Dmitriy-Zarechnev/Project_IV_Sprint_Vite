// ----- Запросили decks из state ------
import { AppRootState } from '../../app/store.ts'

// ----- Получили decks из state ------
export const decksSelector = (state: AppRootState) => {
  return state.decksReducer.decks
}
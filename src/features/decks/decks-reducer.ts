import { ItemsResponseType } from './decks-api.ts'


// ----- Типизация Actions ------
type DecksActions = ReturnType<typeof setDecksAC>

// ----- Константы для Actions ------
const SET_DECKS = 'decks/SET-DECKS'


// ----- Типизация initialState для decksReducer ------
type DecksState = typeof initialState

// ----- initialState для decksReducer ------
const initialState = {
  decks: [] as ItemsResponseType[],
  searchParams: {
    name: '',
  },
}


// ----- Reducer для работы с decks ------
export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case SET_DECKS:
      return { ...state, decks: action.decks }
    default:
      return state
  }
}

// ----- Actions Creators для decksReducer ------
export const setDecksAC = (decks: ItemsResponseType[]) => {
  return { type: SET_DECKS, decks } as const
}



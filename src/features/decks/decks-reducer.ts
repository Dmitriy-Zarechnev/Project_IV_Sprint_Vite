import { ItemsResponseType } from './decks-api.ts'


// ----- Типизация Actions ------
type DecksActions =
  ReturnType<typeof setDecksAC> |
  ReturnType<typeof createDeckAC>

// ----- Константы для Actions ------
const SET_DECKS = 'decks/SET-DECKS'
const CREATE_DECK = 'decks/CREATE-DECK'


// ----- Типизация initialState для decksReducer ------
export type DecksState = typeof initialState

// ********** initialState для decksReducer **********
const initialState = {
  decks: [] as ItemsResponseType[],
  searchParams: {
    name: '',
  },
}


// ******** Reducer для работы с decks *******
export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case SET_DECKS:
      return { ...state, decks: action.decks }
    case CREATE_DECK:
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }
    default:
      return state
  }
}

// ******** Actions Creators для decksReducer *********
export const setDecksAC = (decks: ItemsResponseType[]) => {
  return { type: SET_DECKS, decks } as const
}
export const createDeckAC = (deck: ItemsResponseType) => {
  return { type: CREATE_DECK, deck } as const
}



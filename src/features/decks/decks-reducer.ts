import { AuthorResponseType, ItemsResponseType } from './decks-api.ts'


// ----- Типизация Actions ------
type DecksActions =
  ReturnType<typeof setDecksAC> |
  ReturnType<typeof createDeckAC> |
  ReturnType<typeof deleteDeckAC> |
  ReturnType<typeof updateDeckAC>


// ----- Константы для Actions ------
const SET_DECKS = 'DECKS/SET-DECKS'
const CREATE_DECK = 'DECKS/CREATE-DECK'
const DELETE_DECK = 'DECKS/DELETE-DECK'
const UPDATE_DECK = 'DECKS/UPDATE-DECK'


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
    case DELETE_DECK:
      return { ...state, decks: state.decks.filter(el => el.id !== action.id) }
    case UPDATE_DECK:
      return {
        ...state,
        decks: state.decks.map(el => el.id !== action.deck.id ? { ...el, ...action.deck } : el),
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
export const deleteDeckAC = (id: string) => {
  return { type: DELETE_DECK, id } as const
}
export const updateDeckAC = (deck: AuthorResponseType) => {
  return { type: UPDATE_DECK, deck } as const
}



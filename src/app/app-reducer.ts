// ----- Типизация RequestStatusType для appReducer ------
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

// ----- Типизация Actions ------
type AppActionsType =
  ReturnType<typeof changeAppStatusAC> |
  ReturnType<typeof changeAppErrorAC>

// ----- Типизация initialState для appReducer ------
type AppStateType = typeof initialState

// ----- Константы для Actions ------
const CHANGE_APP_STATUS = 'APP/CHANGE-APP-STATUS'
const CHANGE_APP_ERROR = 'APP/CHANGE-APP-ERROR'

// ********** initialState для appReducer **********
const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

// ******** Reducer для работы с errors *******
export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
  switch (action.type) {
    case CHANGE_APP_STATUS:
      return { ...state, status: action.status }
    case CHANGE_APP_ERROR:
      return { ...state, error: action.message }
    default:
      return state
  }
}

// ******** Actions Creators для appReducer *********
export const changeAppStatusAC = (status: RequestStatusType) => {
  return { type: CHANGE_APP_STATUS, status } as const
}
export const changeAppErrorAC = (message: string) => {
  return { type: CHANGE_APP_ERROR, message } as const
}
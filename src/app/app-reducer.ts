
// ----- Типизация RequestStatusType для appReducer ------
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

// ----- Типизация Actions ------
type AppActionsType = { type:'' }

// ----- Типизация initialState для appReducer ------
type AppStateType = typeof initialState

// ----- Константы для Actions ------


// ********** initialState для appReducer **********
const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

// ******** Reducer для работы с errors *******
export const appReducer = (state:AppStateType =initialState, action :AppActionsType):AppStateType=>{
  switch(action.type){
    default:
      return state
  }
}

// ******** Actions Creators для appReducer *********
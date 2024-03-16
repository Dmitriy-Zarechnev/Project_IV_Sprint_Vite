import { combineReducers, legacy_createStore, applyMiddleware, AnyAction } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { decksReducer } from '../features/decks/decks-reducer.ts'

const rootReducer = combineReducers({
  decksReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))


// ----- Типизация State всего приложения------
export type AppRootState = ReturnType<typeof rootReducer>

// ----- Типизация для ThunkDispatch ------
export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>

// ----- Кастомные useDispatch с типизацией для работы ещё и с thunk ------
export const useAppDispatch = () => useDispatch<AppDispatch>()

// ----- Кастомные useSelector с типизацией на борту------
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector

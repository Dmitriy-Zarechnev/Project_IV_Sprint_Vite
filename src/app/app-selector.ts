import { AppRootState } from './store.ts'
import { RequestStatusType } from './app-reducer.ts'

export const appStatusSelector = (state: AppRootState): RequestStatusType => {
  return state.appReducer.status
}

export const appErrorSelector = (state: AppRootState): string | null => {
  return state.appReducer.error
}
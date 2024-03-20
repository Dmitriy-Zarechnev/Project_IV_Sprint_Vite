import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { useAppDispatch, useAppSelector } from './store.ts'
import { appStatusSelector } from './app-selector.ts'

export const App = () => {
  // ----- Получили status из state, используя кастомный useAppSelector и appStatusSelector ------
  const status = useAppSelector(appStatusSelector)
  // ----- Используем кастомный useAppDispatch ------
  const dispatch = useAppDispatch()

  return (
    <div>
      {status === 'loading' && <LinearLoader />}
      <Decks />
    </div>
  )
}

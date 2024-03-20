import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { useAppSelector } from './store.ts'
import { appStatusSelector } from './app-selector.ts'
import { GlobalError } from './GlobalError/GlobalError.tsx'

export const App = () => {
  // ----- Получили status из state, используя кастомный useAppSelector и appStatusSelector ------
  const status = useAppSelector(appStatusSelector)


  return (
    <div>
      {status === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
      <footer>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Ad maiores nulla
        obcaecati officiis omnis provident, quasi qui reiciendis
        sunt voluptatum?
      </footer>
    </div>
  )
}

import s from './DecksList.module.css'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksSelector } from '../decks-selectors.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { getDecksTC } from '../decks-thunks.ts'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {

  // ----- Получили decks из state, используя кастомный useAppSelector и decksSelector ------
  const decks = useAppSelector(decksSelector)
  // ----- Используем кастомный useAppDispatch ------
  const dispatch = useAppDispatch()
  // Локальный state для skeleton кнопок
  const [isLoading, setIsLoading] = useState(true)

  // ----- Запросили decks с сервера после монтирования компоненты ------
  // useLayoutEffect - срабатывает раньше отрисовки и можно использовать
  useEffect(() => {
    // Включение skeleton
    setIsLoading(true)
    dispatch(getDecksTC())
      .finally(() => {
        // Отключение skeleton
        setIsLoading(false)
      })
  }, [dispatch])


  return (
    <ul className={s.list}>
      {isLoading && decks.length === 0 && <DeckItemSkeleton count={10} />}
      {decks.map(el => {
        return <DeckItem deck={el} key={el.id} />
      })}
    </ul>
  )
}

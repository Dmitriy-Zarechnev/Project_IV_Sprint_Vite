import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksSelector } from '../decks-selectors.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { getDecksTC } from '../decks-thunks.ts'

export const DecksList = () => {

  // ----- Получили decks из state, используя кастомный useAppSelector и decksSelector ------
  const decks = useAppSelector(decksSelector)
  // ----- Используем кастомный useAppDispatch ------
  const dispatch = useAppDispatch()


  // ----- Запросили decks с сервера после монтирования компоненты ------
  useEffect(() => {
    dispatch(getDecksTC())
  }, [dispatch])


  return (
    <ul className={s.list}>
      {decks.map(el => {
        return <DeckItem deck={el} key={el.id} />
      })}
    </ul>
  )
}

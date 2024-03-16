import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { decksSelector } from '../decks-selectors.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {

  // ----- Получили decks из state, используя кастомный useAppSelector и decksSelector ------
  const decks = useAppSelector(decksSelector)
  // ----- Используем кастомный useAppDispatch ------
  const dispatch = useAppDispatch()


  // ----- Запросили decks с сервера после монтирования компоненты ------
  useEffect(() => {
    decksAPI.getDecks()
      .then(getDecksData => {
        dispatch(setDecksAC(getDecksData.items))
      })
  }, [dispatch])


  return (
    <ul className={s.list}>
      {decks.map(el => {
        return <DeckItem deck={el} key={el.id} />
      })}
    </ul>
  )
}

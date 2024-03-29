import s from './DeckItem.module.css'
import { memo, useState } from 'react'
import { ItemsResponseType } from '../../decks-api.ts'
import { useAppDispatch } from '../../../../app/store.ts'
import { deleteDeckTC, updateDeckTC } from '../../decks-thunks.ts'

type DeckProps = {
  deck: ItemsResponseType
}

// Имя автора поста
const TEST_ACC_NAME = 'kukus'

export const DeckItem = memo(({ deck }: DeckProps) => {

  // Локальный state для disable кнопок
  const [isLoading, setIsLoading] = useState(false)

  // Проверка для показа кнопок
  const isTestingDeck = deck.author.name === TEST_ACC_NAME

  // ----- Используем кастомный useAppDispatch ------
  const dispatch = useAppDispatch()


  // ----- Удаление deck ------
  const handleDeleteButtonClick = () => {
    // Disable кнопки после клика
    setIsLoading(true)
    dispatch(deleteDeckTC(deck.id)).finally(() => {
      // Разлочили кнопку после
      setIsLoading(false)
    })
  }


  // ----- Update deck ------
  const handleEditButtonClick = () => {
    // Disable кнопки после клика
    setIsLoading(true)
    dispatch(updateDeckTC({ id: deck.id, name: `${deck.name} updated` }))
      .finally(() => {
        // Разлочили кнопку после
        setIsLoading(false)
      })
  }

  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {isTestingDeck && (
        <div className={s.buttonBox}>
          <button disabled={isLoading} onClick={handleEditButtonClick}>update</button>
          <button disabled={isLoading} onClick={handleDeleteButtonClick}>delete</button>
        </div>
      )}
    </li>
  )
})

import { AppDispatch } from '../../app/store.ts'
import { decksAPI } from './decks-api.ts'
import { createDeckAC, setDecksAC } from './decks-reducer.ts'


// ******** Thunk Creators для decksReducer *********

// ----- Получаем decks с сервера ------
export const getDecksTC = () => async (dispatch: AppDispatch) => {
  try {
    // ----- Запросили decks с сервера ------
    const getDecksData = await decksAPI.getDecks()

    // ----- Задиспатчили decks полученные от сервера в getDecksData ------
    dispatch(setDecksAC(getDecksData.items))
  } catch (error) {
    // ----- Поймали и вывели в console ошибку ------
    console.log('getDecksTC error', error)
  }
}

// ----- Создаем deck и отправляем на сервер ------
export const createDeckTC = (name: string) => async (dispatch: AppDispatch) => {
  try {
    // ----- Отправили deck с name на сервер ------
    const createDecksData = await decksAPI.createDeck(name)

    // ----- Задиспатчили deck после ответа от сервера в createDecksData ------
    dispatch(createDeckAC(createDecksData))
  } catch (error) {
    // ----- Поймали и вывели в console ошибку ------
    console.log('createDeckTC error', error)
  }
}
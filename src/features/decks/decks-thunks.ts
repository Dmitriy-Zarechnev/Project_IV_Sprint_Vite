import { AppDispatch } from '../../app/store.ts'
import { decksAPI } from './decks-api.ts'
import { createDeckAC, setDecksAC } from './decks-reducer.ts'
import { changeAppStatusAC } from '../../app/app-reducer.ts'


// ******** Thunk Creators для decksReducer *********

// ----- Получаем decks с сервера ------
export const getDecksTC = () => async (dispatch: AppDispatch) => {
  try {
    // Показали Loader во время получения decks
    dispatch(changeAppStatusAC('loading'))

    // ----- Запросили decks с сервера ------
    const getDecksData = await decksAPI.getDecks()

    // ----- Задиспатчили getDecksData полученные от сервера ------
    dispatch(setDecksAC(getDecksData.items))

    // Убрали Loader после получения decks
    dispatch(changeAppStatusAC('succeeded'))
  } catch (error) {
    // ----- Поймали и вывели в console ошибку ------
    console.log('getDecksTC error', error)
    // Поменяли status при ошибке
    dispatch(changeAppStatusAC('failed'))
  }
}

// ----- Создаем deck и отправляем на сервер ------
export const createDeckTC = (name: string) => async (dispatch: AppDispatch) => {
  try {
    // Показали Loader во время отправки deck с name на сервер
    dispatch(changeAppStatusAC('loading'))

    // ----- Отправили deck с name на сервер ------
    const createDecksData = await decksAPI.createDeck(name)

    // ----- Задиспатчили createDecksData после ответа от сервера ------
    dispatch(createDeckAC(createDecksData))

    // Убрали Loader после получения createDecksData
    dispatch(changeAppStatusAC('succeeded'))
  } catch (error) {
    // ----- Поймали и вывели в console ошибку ------
    console.log('createDeckTC error', error)
    // Поменяли status при ошибке
    dispatch(changeAppStatusAC('failed'))
  }
}
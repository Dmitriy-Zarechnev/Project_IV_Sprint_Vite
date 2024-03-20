import { isAxiosError } from 'axios'
import { AppDispatch } from '../../app/store.ts'
import { changeAppErrorAC, changeAppStatusAC } from '../../app/app-reducer.ts'

// Типизация серверной ошибки
type ServerError = {
  errorMessages: Array<{ field: string, message: string }>
}

// case-1: ошибки бэкенда (на стороне бэкенда). Ошибку создает axios, в e.response.data  помещает ответ сервера
// case-2: network error - axios создает ошибку, сообщение можно взять из поля e.message
// case-3: синхронные ошибки - создается "нативная" JS-ошибка, имеет поле message

export const handleErrorFunction = (error: any, dispatch: AppDispatch) => {
  // ----- Ошибка ------
  let errorMessage: string

  if (isAxiosError<ServerError>(error)) {
    // ----- Поймали и вывели в console Бэкенд-ошибку ------
    // ----- Поймали и вывели в console network error ------
    errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    // ----- Поймали и вывели в console "нативную" JS-ошибку ------
    errorMessage = (error as Error).message
  }

  // Поменяли error при ошибке
  dispatch(changeAppErrorAC(errorMessage))
  // Поменяли status при ошибке
  dispatch(changeAppStatusAC('failed'))
}
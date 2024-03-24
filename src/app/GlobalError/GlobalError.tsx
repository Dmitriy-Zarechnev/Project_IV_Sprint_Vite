import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../store.ts'
import { appErrorSelector } from '../app-selector.ts'
import { changeAppErrorAC } from '../app-reducer.ts'

export const GlobalError = () => {
  // ----- Получили error из state, используя кастомный useAppSelector и appErrorSelector ------
  const errorMessage = useAppSelector(appErrorSelector)
  // ----- Используем кастомный useAppDispatch ------
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(changeAppErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer position="top-center" autoClose={5000} theme="colored" />
}

import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppSelector } from '../store.ts'
import { appErrorSelector } from '../app-selector.ts'

export const GlobalError = () => {
  // ----- Получили error из state, используя кастомный useAppSelector и appErrorSelector ------
  const errorMessage = useAppSelector(appErrorSelector)

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [errorMessage])

  return <ToastContainer position="top-center" autoClose={5000} theme="colored" />
}

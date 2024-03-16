import s from './AddNewPostForm.module.css'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../app/store.ts'
import { createDeckTC } from '../decks-thunks.ts'



type FormValues = {
  name: string
}

export const AddNewDeckForm = () => {

  // ----- Используем кастомный useAppDispatch ------
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    // Задиспатчили data из формы и в случае успеха, очистили форму
    dispatch(createDeckTC(data.name)).then(() => {
      reset()
    })

  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        Deck name
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name must be longer than or equal to 3 characters',
            },
          })}
          autoComplete="off"
        />
        <p className={s.errorMessage}>{errors.name && errors.name.message}</p>
      </label>
      <button type="submit">Add new deck</button>
    </form>
  )
}

type MyComponentProps<D> = {
  items: D[]
  defaultItem: D
}

function MyComponent<D>(props: MyComponentProps<D>) {
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      <MyComponent items={['react', 'typescript']} defaultItem={'9'} />
      <MyComponent items={users} defaultItem={{ name: 'Sam', age: 43 }} />
    </>
  )
}

type User = {
  name: string
  age: number
}

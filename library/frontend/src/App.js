import { useState } from 'react'
import { useQuery } from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { ALL_AUTHORS, ALL_BOOKS } from './queries'

const App = () => {
  const [page, setPage] = useState('authors')
  const result = useQuery(ALL_AUTHORS)
  const bookResult = useQuery(ALL_BOOKS)
  if (result.loading || bookResult.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors show={page === 'authors'} allAuthors={result.data.allAuthors}/>

      <Books show={page === 'books'} allBooks={bookResult.data.allBooks} />

      <NewBook show={page === 'add'} />
    </div>
  )
}

export default App

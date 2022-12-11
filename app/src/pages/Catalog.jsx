import api from 'api/api'
import Input from 'components/input/Input'
import MovieGrid from 'components/movie-grid/MovieGrid'
import PageHeader from 'components/page-header/PageHeader'
import Search from 'components/search/Search'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Catalog() {
  const [title, setTitle] = useState('')
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const { sort } = useParams()

  //load more
  useEffect(() => {
    api
      .getMovies(20, page, sort)
      .then((newMovies) => setMovies([...movies, ...newMovies]))
  }, [page])

  //search
  useEffect(() => {
    api.getMovies(20, page, sort, title).then((movies) => setMovies(movies))
  }, [title])

  return (
    <>
      <PageHeader title={sort ? sort : 'Movies'} />
      <div className='section mb-3'>
        <div className='section mb-3'>
          <Search title={title} setTitle={setTitle} />
        </div>
        <p>{title}</p>
        <MovieGrid movies={movies} loadMore={() => setPage(page + 1)} />
      </div>
    </>
  )
}

export default Catalog

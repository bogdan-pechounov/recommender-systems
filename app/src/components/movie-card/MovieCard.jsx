import api from 'api/api'
import Button from 'components/button/Button'
import React from 'react'
import { Link } from 'react-router-dom'

import './movie-card.scss'

function MovieCard({ movie }) {
  // console.log(
  //   movie._id,
  //   movie.release_date,
  //   movie.rating_avg,
  //   movie.rating_count,
  //   movie.trend_score
  // )
  return (
    <Link to={`/movie/${movie._id}`}>
      {movie.poster_path ? (
        <div
          className='movie-card'
          style={{
            backgroundImage: `url(${api.w500Image(movie.poster_path)})`,
          }}
        >
          <Button>
            <i className='bx bx-play'></i>
          </Button>
        </div>
      ) : (
        <div
          className='movie-card'
          style={{
            outline: 'white 5px solid',
            outlineOffset: '-5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i
            className='bx bx-image-alt'
            style={{
              position: 'absolute',
              paddingBottom: '160%',
              fontSize: '100px',
            }}
          ></i>
        </div>
      )}

      <h3 style={{ textAlign: 'center' }}>{movie.title}</h3>
      {movie.similarity && (
        <p>
          <i>Similarity:</i> {movie.similarity.toFixed(4)}
        </p>
      )}
    </Link>
  )
}

export default MovieCard

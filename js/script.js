const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 0)

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

const a = prompt('Один из последних просмотренных фильмов', '')
const b = prompt('На сколько вы его оценете?', 5)
const c = prompt('Один из последних просмотренных фильмов', '')
const d = prompt('На сколько вы его оценете?', 5)

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

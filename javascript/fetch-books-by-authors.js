const books = require('./books')

/* return books by author */
const getBooksByAuthor = (author) => {
  return books.filter(value => value.author === author)
      .map(value => value.title)
}

const books = require('./books')

/* return books by author */
const getBooksByAuthor = (author) => {
  const booksByAuthor =  books.filter(value => value.author === author)
  return booksByAuthor.map(value => value.title)
}

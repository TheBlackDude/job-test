const books = require('./books')

const print = result => console.log('Result:', result)

const filterBooksWithTitleStartingWithA = (sortedBook) => {
  return new Promise((resolve, reject) => {
    resolve(sortedBook.filter(value => value.title.toLowerCase().startsWith('a')))
  })
}

const sortBooksAlphabetically = (booksData) => {
  return new Promise((resolve, reject) => {
    resolve(booksData.sort((a, b) => a.title > b.title))
  })
}

const getBooksAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(books.map(value => value))
    }, 2000)
  })
}

getBooksAsync()
  .then(data => {
    return sortBooksAlphabetically(data)
  })
  .then(data => {
    return filterBooksWithTitleStartingWithA(data)
  })
  .then(data => print(data))

module.exports = (books) => {
  const ratings = {}
  /* sort books by ratings */
  books.sort((a, b) => a.ratings < b.ratings)

  ratings.getTopBooks = (numberOfBooks) => {
    return books.slice(0, numberOfBooks)
        .map(value => value.title)
  }
  ratings.getTopAuthors = (numberOfBooks) => {
    return books.slice(0, numberOfBooks)
        .map(value => {
          return {[value.author]: value.ratings}
        })
  }

  return ratings
}

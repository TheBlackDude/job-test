module.exports = (books) => {
  const ratings = {}
  /*
   * sort books by ratings (here i don't understand whether to make a copy of the books or sort the received ones)
   * because sort will not return a copy. but i assume its to sort the original 
   */
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

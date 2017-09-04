module.exports = (books) => {
  const topBooks = {}
  /*
   * sort books by ratings (here i don't understand whether to make a copy of the books or sort the received ones)
   * because sort will not return a copy. but i assume its to sort the original
   */
  books.sort((a, b) => a.ratings < b.ratings)
  topBooks.getTopThreeWithHighestRatings = () => {
    return books.slice(0, 3)
  }

  return topBooks
}

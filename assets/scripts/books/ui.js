const showBooksTemplate = require('../templates/book-listing.handlebars')
const store = require('../store.js')

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').append(showBooksHtml)
}

const clearBooks = () => {
  $('.content').empty()
}

const deleteBookSuccess = (id) => {
  console.log(`delete from api successful for id: ${store.id}`)
  $('#' + store.id).remove()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  deleteBookSuccess,
  clearBooks,
  failure
}

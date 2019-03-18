'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const onDeleteBook = (event) => {
  event.preventDefault()
  store.id = $(event.target).parent().data('id')
  api.deleteBook(store.id)
    .then(ui.deleteBookSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getBooksButton').on('click', onGetBooks)
  $('#clearBooksButton').on('click', onClearBooks)
  $('body').on('click', '.delete-book', onDeleteBook)
}

module.exports = {
  addHandlers
}

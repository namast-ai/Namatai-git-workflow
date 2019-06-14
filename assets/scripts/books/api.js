'use strict'
const store = require('../store')
const config = require('../config')

const newBook = () => {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newBook
}

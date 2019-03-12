/*
  Capitalize
*/

function capitalize(str) {
  const words = str.split(' ')

  const formatedWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })

  return formatedWords.join(' ')
}

module.exports = capitalize
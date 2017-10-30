async function getData() {
  const response = await fetch('/typeaheadData')
  return await response.json()
}

const names = []

getData()
  .then((data) => data.forEach(people => {
    names.push(people.name.toLowerCase())
  }))
  .catch(err => console.error(err))

const suggest = (list, char) => {
  const newSug = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].startsWith(char)) {
      newSug.push(list[i])
    }
  }
  console.log(newSug);
  return newSug
}

const $input = document.querySelector('input')
const $ul = document.querySelector('ul')
const $wrapper = document.querySelector('#wrapper')

const capitalize = (str) => {
  return str
    .split(' ')
    .map((name) => {
      return name[0].toUpperCase() + name.substr(1)
    })
    .join(' ')
}

$input.addEventListener('keyup', (event) => {
  const input = event.target.value
  console.log(input);
  if (input) {
    $ul.innerHTML = ''
    const suggestion = suggest(names, input)
    for (let i = 0; i < suggestion.length; i++) {
      $ul.innerHTML += "<li>" + capitalize(suggestion[i]) + "</li>"
    }
  }
  else {
    $ul.innerHTML = ''
  }
  $wrapper.appendChild($ul)
})

async function getData() {
  const response = await fetch('/typeaheadData')
  return await response.json()
}

const names = []

getData()
  .then((data) => data.forEach(people => {
    names.push(people.name)
  }))
  .catch(err => console.error(err))

const suggest = (list, char) => {
  const newSug = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].slice(0, char.length) === char) {
      newSug.push(list[i])
    }
  }
  return newSug
}

$input.addEventListener('keyup', (event) => {
  const char = event.key
  const result = suggest(names, char)
  if (char === 'Backspace') {
    $ul.innerHTML = ''
  }
  else {
    for (let i = 0; i < result.length; i++) {
      const suggestion = "<li>" + result[i] + "</li>"
      $ul.innerHTML += suggestion
    }
  }
})

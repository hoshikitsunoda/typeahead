async function getData() {
  const response = await fetch('/typeaheadData')
  return await response.json()
}

const names = []

getData()
  .then((data) => data.forEach(people => {
    names.push(people)
  }))
  .catch(err => console.error(err))

const suggest = (list, char) => {
  const newSug = []
  console.log(list)
  for (let i = 0; i < list.length; i++) {
    if (list[i].slice(0, char.length) === char) {
      newSug.push(list[i].name)
    }
  }
  return newSug
}

suggest(names, 'C')

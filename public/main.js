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

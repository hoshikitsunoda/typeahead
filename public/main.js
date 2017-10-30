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

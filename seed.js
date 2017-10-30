const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/typeahead'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const typeaheadData = db.collection('typeaheadData')

  typeaheadData
    .insertMany([
      'Leanne Graham',
      'Ervin Howell',
      'Clementine Bauch',
      'Patricia Lebsack',
      'Chelsey Dietrich',
      'Dennis Schulist',
      'Kurtis Weissnat',
      'Nicholas Runolfsdottir V',
      'Glenna Reichert',
      'Clementina DuBuque'
    ]
      .sort()
      .map(data => ({
        name: data
      }))
    )
    .catch(err => console.error(err))
    .then(() => db.close())
})

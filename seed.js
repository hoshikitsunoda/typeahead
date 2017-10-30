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
      { id: 1, name: 'Leanne Graham'},
      { id: 2, name: 'Ervin Howell'},
      { id: 3, name: 'Clementine Bauch'},
      { id: 4, name: 'Patricia Lebsack'},
      { id: 5, name: 'Chelsey Dietrich'},
      { id: 6, name: 'Dennis Schulist'},
      { id: 7, name: 'Kurtis Weissnat'},
      { id: 8, name: 'Nicholas Runolfsdottir V'},
      { id: 9, name: 'Glenna Reichert'},
      { id: 10, name: 'Clementina DuBuque'},
    ])
})

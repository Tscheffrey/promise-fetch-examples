fetch('json/first.json')
  .then(function(response) {
    // erfülltes Promise-Objekt in JSON umwandeln
    return response.json()

  }).then(function(json) {
    // Yes! Die Request war erfolgreich.
    console.log(json)

  }).catch(function(error) {
    /* Verdammt. Es gab einen Fehler beim Laden oder beim Parsen des JSON. */
    console.log('fetch failed: ', error)

  })

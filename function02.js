

fetch('json/first.json').then(function(response) {
  return response.json()

}).then(function(json) {
  // 1. Request war erfolgreich
  console.log(json)

  // URL für 2. Request
  var url = 'json/second.json'
  // 2. Request wird gestartet und weitergegeben
  return fetch(url)

}).then(function(response) {
  return response.json()

}).then(function(json) {
  // 2. Request war auch erfolgreich
  console.log(json)

}).catch(function(ex){
  // eine der Requests war nicht erfolgreich
  console.log("error")
})

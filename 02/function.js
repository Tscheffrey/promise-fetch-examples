

fetch('http://dummy.restapiexample.com/api/v1/employees').then(function(response) {
  return response.json()

}).then(function(employees) {
  // 1. Request war erfolgreich
  // URL für 2. Request bauen
  var url = 'http://dummy.restapiexample.com/api/v1/employee/' + employees[0].id

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

var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))

app.use(express.static(__dirname + '/'))

app.get('/index', function(request, response) {
  response.send('index')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
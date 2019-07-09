var express = require('express')
var app = express()

var options = {
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now()),
    res.set('Cache-Control', 'public')
  }
}

app.set('port', (process.env.PORT || 3000))

app.use(express.static(__dirname + '/', options))

app.get('/index', function(request, response) {
  response.send('index')
})

app.listen(app.get('port'), function(request, response) {
  console.log('Node app is running on port', app.get('port'))
})
var express = require('express')
var app = express()
var json = new Object()

app.get('/', function (req, res) {
    // var header = req.header
    var ip = req.ip
    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
    }
    
    json.ipaddress = ip
    

  res.end(JSON.stringify(json))
})

app.listen(process.env.PORT, function () {
  console.log(`Timestamp app listening on port ${process.env.PORT}!`)
})
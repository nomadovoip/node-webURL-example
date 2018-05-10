//initialising dependencies
const app = require('express')()
const bodyParser = require('body-parser')
const fs = require('fs')
const config = require('./config')

//Loading Body Parser plugin to read POST Data on call
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//Function to write incoming object to correct file
const Write2File = (filename, data) => {
  fs.appendFile(filename, data + '\n', (err) => {
    if (err) throw err;
    return 1
  })
}

//Loading Routes
app.post('/routecall', (req, res) => {
  Write2File('incomingrequests.txt',JSON.stringify(req.body))
  console.log(req.body)
  res.set('content-type','text/plain; charset=utf-8')
  res.send(`
    dtype: ${config.dtype} \n
    dnumber: ${config.dnumber} \n
    answer_url: ${config.answer_url} \n
    hangup_url: ${config.hangup_url} \n
  `)
})

app.post('/data', (req, res) => {
  switch (req.query.on) {
    case 'answer':
      Write2File('onanswer.txt',JSON.stringify(req.body))
      break;
    
    case 'hangup':
      Write2File('onhangup.txt',JSON.stringify(req.body))
      break;

    default:
      break;
  }
  res.send("OK")
})

app.listen(3000, () => {
    console.log('Application is running on port 3000!')
})
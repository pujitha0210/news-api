const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname) } )
  })


app.get('/api', async(req, res) => {
  // let query ="weather"
  //   let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=bafde60a68ff4ac5b2b8655feefed8a6`
  //   let r = await axios(url)
  //   let a = r.data 
  //   res.json(a.articles[0])
  let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query
  let r = await axios(url)
  let a = r.data 
  res.json(a)

  })
  
  app.listen(port, () => {
    
  })




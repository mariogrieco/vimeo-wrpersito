import express from 'express'
import bodyParser from 'body-parser'
import asyncify from 'express-asyncify'
import videosRoutes from './routes/videos'

const server = asyncify(express())

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Method", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if ('OPTIONS' == req.method) {
    res.sendStatus(200).end();
  }
  else {
    next();
  }
});

server.use(bodyParser.urlencoded({ extended: false })) 
server.use(bodyParser.json())

// SETTING ROUTES
server.use(videosRoutes)


/// othres

server.get('*', function(req, res){
  res.status(404).json({error: "Missing route"});
});

const PORT = process.env.PORT  || 8080

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

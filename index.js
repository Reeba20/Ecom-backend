// import json-server
const jsonServer =require('json-server')

// cors
const cors=require('cors')
// create
const server = jsonServer.create()
// middleware
const middleware = jsonServer.defaults()
// setup routes
const route =jsonServer.router('db.json')
// implementing use
server.use(cors())
server.use(middleware)
server.use(route)

// port
const PORT = process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log("server running on port : ",PORT);
    
})
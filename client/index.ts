require('dotenv-safe').config();

import path from 'path'
const express = require( "express" );
const caller = require('grpc-caller')
const app = express()

const {CLIENT_PORT, SERVER_PORT} = process.env

const PROTO_PATH = path.resolve(__dirname, './proto/greeter.proto')
const client = caller(`server:${SERVER_PORT}`, PROTO_PATH, 'Greeter')

function main() {
  app.get('/greeter/:name', async (req:any, res:any) => {
    const {
      params: {
        name
      }
    } = req
    
    const resp = await client.sayHello({ name })
    res.status(200)
    res.send({
      data: resp
    });
  });

  app.get('/ping', async (req: any, res:any) => {
    const resp = await client.sayPing({})
    res.status(200)
    res.send({data: resp});
  })

  app.listen(CLIENT_PORT, () => console.log(`Client listening on port: ${CLIENT_PORT}!`))
}
main();
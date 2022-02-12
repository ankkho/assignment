require('dotenv-safe').config();

import Mali from 'mali'

import GreetingService from './services/Greeting'
import {loadProtoPath, logger} from './utils'

const {SERVER_PORT} = process.env

const path = loadProtoPath()
const server = new Mali(path)

server.on('error', (err:any, ctx:any) => {
  logger.error('Server error for call %s of type %s', ctx.name, ctx.type, err);
})

const main = () => {
  server.addService(GreetingService.protoPath)
  server.use({...GreetingService.functions})

  server.start(`0.0.0.0:${SERVER_PORT}`)
  logger.info(`Server running at: 0.0.0.0:${SERVER_PORT}`)
}

main()
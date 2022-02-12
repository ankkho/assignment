import axios from 'axios'
import path from 'path'
import pino from "pino";

const logger = pino({
  name: 'grpc-proxy'
})

const {GRAPHQL_HOST} = process.env

interface IData {
  [key: string]: any;
}
interface IRespObj {
  data: IData
}

const loadProtoPath = () => path.resolve('./proto/greeter.proto')

const callGraphql = (query:string):any => axios({
  url: GRAPHQL_HOST,
  method: 'post',
  data: {
    query: `query {${query}}`
  }
})

const respObject = (ctx:any, resp: any) => {
  ctx.response.res = {...resp}
  return ctx
}

const getResponse = (resp: IRespObj) => {
  const {
    data: {
      data
    }
  } = resp
  
  return data
}

export {
  getResponse,
  respObject,
  loadProtoPath,
  callGraphql,
  logger
}
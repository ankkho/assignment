import { callGraphql, respObject, getResponse } from '../../utils'

export default async function (ctx: any) {
  const {req: {
    name
  }} = ctx
  
  const query = `hello(name: "${name}")`

  const resp = await callGraphql(query)
  const data = getResponse(resp)

  return respObject(ctx, data)
}
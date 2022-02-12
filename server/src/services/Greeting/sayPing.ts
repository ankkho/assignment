import { callGraphql, respObject, getResponse } from '../../utils'

export default async function (ctx: any) {
  const query = `ping`

  const resp = await callGraphql(query)
  const data = getResponse(resp)

  return respObject(ctx, data)
}
import type { NextApiRequest, NextApiResponse } from 'next'
import { handleGetAll } from '../../../api/handlers/audioCategory'

type Data = {
  name: string
}

function handlePost(res: NextApiResponse<Data>) {
  res.status(201).json({ name: 'Library Post Success' })
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      handleGetAll(res)
      break
    case 'POST':
      handlePost(res)
      break
    default:
      break
  }
}

import type { NextApiRequest, NextApiResponse } from 'next'
import Http from 'next/'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // make the api request.
    //res.status(200).json({ name: 'John Doe' })
}
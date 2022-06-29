import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch(`${process.env.ENDPOINT_AUTH_MS || 'http://auth'}/register`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({code: req.body})
    })
    const data = await response.json();
    console.log(data)
    res.status(200).json(data)
}
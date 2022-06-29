import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const request = await fetch(`${process.env.ENDPOINT_AUTH_MS || 'http://auth'}/login`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({credential: req.body})
    })
    res.status(200).json({ request })
}
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            const response = await fetch('http://auth/google/url')
            const data = await response.json()

            res.status(200).json(data)
        } catch (error: any) {
            res.status(500).json({
                error: `failed to generate authentication URL: ${error}`
            })
        }
    } else if (req.method === "POST") {
        try {
            const response = await fetch('http://auth/google/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req.body)
            })
            const data = await response.json()

            res.status(200).json(data)
        } catch (error: any) {
            res.status(500).json({
                error: `failed to generate authentication URL: ${error}`
            })
        }
    } else {
        res.status(405).json({})
    }
}

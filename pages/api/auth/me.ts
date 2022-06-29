import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = req.cookies.auth_token
    if (!token) {
        res.status(401).json({})
        return
    }

    try {
        const response = await fetch('http://auth/validate', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                token
            })
        })

        const data = await response.json()

        if (data.refreshed_token)
            res.setHeader('Set-Cookie', serialize('auth_token', data.refreshed_token, { path: '/' }));

        res.status(200).json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json({})
    }
}

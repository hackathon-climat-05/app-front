import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = req.cookies.auth_token
    if (!token) {
        res.status(401).json({
            error: 'unauthorized'
        })
        return
    }

    try {
        const response = await fetch('http://auth/jwt/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token
            })
        })

        const data = await response.json()
        if (response.status === 401) {
            res.status(401).json({
                error: 'unauthorized'
            })
            return
        }

        if (response.status >= 400)
            throw data

        res.status(200).json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json({})
    }
}

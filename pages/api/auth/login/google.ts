import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const response = await fetch('http://auth/google/url')
            const data = await response.json()
            if (response.status >= 400)
                throw data

            res.status(200).json(data)
        } catch (error) {
            console.error(error)
            res.status(500).json({
                error: 'failed to generate authentication URL'
            })
        }
    } else if (req.method === 'POST') {
        try {
            const response = await fetch('http://auth/google/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req.body)
            })
            const { token, ...data } = await response.json()
            if (response.status >= 400)
                throw data

            res.setHeader('Set-Cookie', serialize('auth_token', token, { path: '/' }))

            res.status(200).json(data)
        } catch (error) {
            console.error(error)
            res.status(500).json({
                error: 'failed to login'
            })
        }
    } else {
        res.status(405).json({})
    }
}

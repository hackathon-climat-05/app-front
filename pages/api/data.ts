import type { NextApiRequest, NextApiResponse } from 'next'

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
        const response = await fetch('http://calculator/data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()
        if (response.status === 401) {
            res.status(401).json({})
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

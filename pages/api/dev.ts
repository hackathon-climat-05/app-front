import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const response = await fetch('http://calculator/data', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })

        const data = await response.json()

        res.status(200).json({data})
    } catch (error) {
        console.error(error)
        res.status(500).json({})
    }
}

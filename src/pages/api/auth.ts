import {NextApiRequest, NextApiResponse} from "next";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJpZCI6MSwicm9sZSI6IkFkbWluIn0.Eu3AWft92ykv0hHgIBdm8GqyF4tWWg7STF3nVg2PVUo'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ token })
}


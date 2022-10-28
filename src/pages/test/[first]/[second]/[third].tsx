import React from "react";

import { GetServerSideProps } from 'next'

interface PostPageProps {
    req: string[][]
}

export default function PostPage({req}: PostPageProps) {

    return<div>
        {req.map(([key, value]) => <div key={key}>{key}: {value}</div>)}
    </div>
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps<PostPageProps> = async ({query}) => {
    return {
        props: {req: Object.entries(query)}, // will be passed to the page component as props
    }
}

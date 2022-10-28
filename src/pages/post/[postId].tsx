import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Post} from "../../models/Post";
import {inspect} from "util";
import styles from '../../styles/Home.module.css';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

interface PostPageProps {
    post: Post
}

export default function PostPage({post}: PostPageProps) {

    return post ? <div className={styles.container}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div> : <div>Loading...</div>
}

export const getServerSideProps: GetServerSideProps<PostPageProps> = async ({query}) => {
    const { postId } = query;
    const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json())
    return {
        props: {post}, // will be passed to the page component as props
    }
}

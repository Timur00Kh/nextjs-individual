import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import {Post} from "../models/Post";
import Link from "next/link";



export default function Home() {
  const [postList, setPostLists] = useState<Post[]>([]);

  useEffect(() => {
    ( async () => {
      const data: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
      setPostLists(data);
    })()
  }, [])


  return (
    <div className={styles.container}>
      {postList.map(post => <div key={post.id} className={styles.item}>
        <Link href={`/post/${post.id}`}>{post.title}</Link>
      </div>)}
    </div>
  )
}

import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {useRouter} from "next/router";
import {Post} from "../../models/Post";
import {inspect} from "util";
import styles from '../../styles/Home.module.css';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import {Lesson} from "../../components/Lesson";
import Link from "next/link";

function hardloadFn(id: number) {
    console.log('hardloadFn')
    return id
}

export const cartStatusContext = React.createContext('empty');

export default function PostPage() {

    const [id, setId] = useState(1);

    console.log('PostPage');

    const onLessonButtonClick = useCallback(() => {
        console.log('onLessonButtonClick');
    }, []);

    useEffect(() => {
        // console.log('useEffect started');
        // return () => console.log('useEffect ended');
    }, []);

    const status = useContext(cartStatusContext);



    return <div>
        <Link href={'/'}>Main</Link>
        <button onClick={() => setId(id + 1)}>{status}</button>
        <Lesson onButtonClick={onLessonButtonClick}/>
    </div>
}

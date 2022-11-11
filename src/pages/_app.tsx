import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import React, {useEffect, useState} from "react";

type TToken = string | null;

interface IAuthContext {
    token: TToken;
    setToken: (token: TToken) => void
}

export const AuthContext = React.createContext<IAuthContext>(
    {token: null, setToken: () => undefined}
);

const LOCAL_STORAGE_TOKEN_KEY = 'LOCAL_STORAGE_TOKEN_KEY'
export default function App({Component, pageProps}: AppProps) {
    const [token, setToken] = useState<TToken>(null);

    const setTokenProxy = (token: TToken) => {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(token))
        setToken(token);
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || "null");
        setToken(token)
    }, [])

    return <AuthContext.Provider value={
        {
            token: token,
            setToken: setTokenProxy
        }}
    >
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossOrigin="anonymous"/>
            <title>Blog</title>
        </Head>
        <Component {...pageProps} />
    </AuthContext.Provider>
}

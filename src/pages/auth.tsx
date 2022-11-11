import React, {useContext} from "react";
import {AuthContext} from "./_app";
import Link from "next/link";



export default function Auth() {

    const {setToken} = useContext(AuthContext);

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const login = form['login'].value;
        const password = form['password'].value;

        const data: {token: string} = await fetch('/api/auth', { method: 'POST', body: JSON.stringify({login, password}) }).then(res => res.json())
        setToken(data.token);
    }

    return <div>
        <form style={{display: 'flex', flexDirection: 'column', gap: '5px', maxWidth:300, padding: '10px'}} onSubmit={onSubmit}>
            <input name="login" type="text"/>
            <input name="password" type="password"/>
            <button type="submit">submit</button>
        </form>
        <Link href={'/user'}>User</Link>
    </div>
}
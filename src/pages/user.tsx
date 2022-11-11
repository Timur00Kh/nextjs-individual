import {useContext, useMemo} from "react";
import {AuthContext} from "./_app";
import {parseJwt} from "../utils/parseJwt";


export default function UserPage() {

    const {token} = useContext(AuthContext);

    const data = useMemo(() => token ? parseJwt(token) : null, [token])

    return <div>
        {data ?
            <div>
                <h1>{data.name}</h1>
                <h2>{data.role}</h2>
            </div> :
            <div>Пользователь не авторизован</div>
        }
    </div>
}
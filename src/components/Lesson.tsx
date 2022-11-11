import {useContext, useEffect} from "react";
import {cartStatusContext} from "../pages/test";

interface Props {
    onButtonClick: () => void
}

export function Lesson({onButtonClick}: Props) {

    const status = useContext(cartStatusContext);

    return <div>
        <button onClick={onButtonClick}>{status}</button>
    </div>
}
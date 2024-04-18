import { useEffect, useRef } from "react"

function Input() {

    const focusInput = useRef();

    useEffect (()=> {
        focusInput.current.focus();
    }, []);
    return (
        <div>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text" ref={focusInput}></input>
            <input type="text"></input>
        </div>
    )
}

export default Input
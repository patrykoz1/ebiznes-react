import React, { useContext } from 'react'
import { MyContext } from '../contexts/AppContext'
import { signOut } from '../services/fetch';

export default function Logout() {
    const [state, setState] = useContext(MyContext)

    const signOutFoo = async () => {
        signOut().then((response) => {
            /*if (response.status != 200) {
                console.log("Already Logged In")
            }
            else {*/
                localStorage.removeItem('email');
                setState({ email: '', isLogged: false });
            //}
            console.log("from server logout ", response);
        })

    }

    return (
        <div className="menu-item push-down lastItem" onClick={signOutFoo}>
            <button> Kliknij tu aby się wylogować...</button>
        </div>
    )
}
import React, { useContext } from 'react'
import { MyContext } from '../contexts/AppContext'
import { signOut as signOutFetch } from '../services/fetch';

export default function Logout() {
    const [state, setState] = useContext(MyContext)

    const signOut = async () => {
        signOutFetch().then((response) => {
            if (response.status != 200) {
                console.log("Already Logged In")
            }
            else {
                localStorage.removeItem('email');
                setState({ email: '', isLoggedIn: false });
            }
            console.log("from server logout ", response);
        })

    }

    return (
        <div className="menu-item push-down lastItem" onClick={signOut}>
            SignOut
        </div>
    )
}
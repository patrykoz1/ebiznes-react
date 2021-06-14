import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const startState = {
    email:'',
    isLogged: false,

};


export const MyContext = React.createContext([[],() => {}]);

const AppStore = ({ children }) => {
    const [state, setState] = useState(startState);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const logged = Cookies.get("authenticator");

        const checkSession = Cookies.get();
        console.log(checkSession)
        console.log(logged)
        if (logged) {//if  logged
            setState({ email: email, isLogged: true })
        }
        else {
            setState({ email: email, isLogged: false })
        }

        console.log(email);
    }, []) // <-- empty dependency array

    return (
        <MyContext.Provider value={[state, setState]}>{children}</MyContext.Provider>
    );
}


export default AppStore;
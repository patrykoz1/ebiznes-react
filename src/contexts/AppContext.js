import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const startState = {
    email:'',
    isLogged: false,

};


export const MyContext = React.createContext();

const AppStore = ({ children }) => {
    const [state, setState] = useState(startState);

    useEffect(() => {
        const email = localStorage.getItem('email');
        //const logged = Cookies.get('authenticator');
        const isLoggedIn = localStorage.getItem('isLogged');
        const id = localStorage.getItem('userId');
        //const checkSession = Cookies.get();
        //console.log(state);
        //console.log(checkSession);
        //console.log(logged);
        /*if (logged) {//if  logged
            setState({ email: email, isLogged: true })
        }
        else {*/
            setState({ email: email, isLogged: isLoggedIn,userdId:id })
        //}

        console.log(email);
    }, []) // <-- pusta tablica

    /*const readUrlParamsFromAuthentication = () => {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var userStr = url.searchParams.get("user-id");

        var userId = null;
        var userEmail = null;
        if (userStr && userStr.startsWith("User(")) {
            var ind1 = userStr.lastIndexOf("User(") + 5;
            var ind2 = userStr.indexOf(",");
            userId = userStr.substring(ind1, ind2);

            ind1 = userStr.lastIndexOf("),") + 2;
            ind2 = userStr.lastIndexOf(")");

            userEmail = userStr.substring(ind1, ind2);

            localStorage.setItem("email", userEmail);
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userId", userId);
            setState({ email: userEmail, isLoggedIn: true, userId: userId })
        }

        console.log(" user id =", userId, "email =", userEmail);

    }*/

    return (
        <MyContext.Provider value={[state, setState]}>{children}</MyContext.Provider>
    );
}


export default AppStore;
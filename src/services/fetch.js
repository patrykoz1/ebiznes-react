
export function getProducts() {
    const route = "products";
    return fetchData(route);

    const host = "http://localhost:9000/"
    //const route=""

    return fetch(host + route).then((response) => response.json())
}

export function buyProducts(arr){

}

export function getProduct(id) {
    const route = "productJSON/" + id;

    return fetchData(route);
}
export function getCategory() {
    const route = "categoryJSON";
    return fetchData(route);
}

export function getUser() {
    const route = "userJSON";
    return fetchData(route);
}


export function signUp(email, password) {
    const host = "http://localhost:9000/"
    const route = "signUp";
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    };
    return fetch(host + route, requestOptions)
}

export function signIn(email, password) {
    const host = "http://localhost:9000/"
    const route = "signIn";
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
        credentials: 'include',
    };
    return fetch(host + route, requestOptions)
}

export function signOut() {
    const host = "http://localhost:9000/"
    const route = "signOut";
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers': '*'},
        credentials: 'include',
        mode: 'no-cors',
    };
    return fetch(host + route, requestOptions)
}

//G_AUTHUSER_H
export function signInGoogle() {
    const host = "http://localhost:9000/"
    const route = "authenticate/google";
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    };
    return fetch(host + route, requestOptions)
}

export function signInFacebook() {
    const host = "http://localhost:9000/"
    const route = "authenticate/facebook";
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    };
    return fetch(host + route, requestOptions)
}

function fetchData(route) {
    const host = "http://localhost:9000/"

    return fetch(host + route).then((response) => response.json())
}



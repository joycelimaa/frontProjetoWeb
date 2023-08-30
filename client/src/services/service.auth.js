import api from "./service";

export const ACESS_TOKEN_KEY = "@"

export function isAuth() {
    // return localStorage.getItem(ACESS_TOKEN_KEY) !== null;
    return false;
}

export function getAcessToken() {
    return localStorage.getItem(ACESS_TOKEN_KEY);
}

export function authLogin(acessToken) {
    localStorage.setItem(ACESS_TOKEN_KEY, acessToken);
    window.location.reload();
}

export function authLogout() {
    localStorage.clear();
}

export async function signIn(data) {
    try {
        const { login, password } = data;
        const res = await api.post(`/v1/auth/login`, { login, password});
        const { token } = res.data;
        
        authLogin(token);
    } 
    catch (error) {
        return error;
    }
}
import { useNavigate } from "react-router-dom";
import api from "./service";

export const ACESS_TOKEN_KEY = "@"

export function isAuth() {
    return localStorage.getItem(ACESS_TOKEN_KEY) !== null;
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
        const { email, password } = data;
        const res = await api.post("/v1/auth/login", { email, password});
        const { token } = res.data;
        console.log(res);
        authLogin(token);
    } 
    catch (error) {
        return error.data;
    }
}

export async function signUp(data) {
    try {
        const {
            name,
            email,
            password,
            confirmPassword
          } = data;
          const res = await api.post("/v1/auth/register", { name, email, password, confirmPassword });
          return res.data;
    } catch (error) {
        return error.data;
    }
}

export async function getSub() {
    const acess_token = getAcessToken();
    try {
        const res = await api.get("/v1/user/me", {
            headers: { 'Authorization': `Bearer ${acess_token}`}
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
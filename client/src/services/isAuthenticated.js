import axios from "axios";

async function isAuthenticated() {
    const userToken = localStorage.getItem('token');

    if (userToken) {
        try {
            let response = await axios.get('/v1/user/me');

            return response.data;
        } catch (error) {
            console.log("Usuário não autenticado: " + error);
            throw error;
        }
    }
}

export default isAuthenticated;
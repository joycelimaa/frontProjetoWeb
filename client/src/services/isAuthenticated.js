import axios from "axios";

async function isAuthenticated() {
    const userToken = localStorage.getItem('token');

    if (userToken) {
        try {
            let response = await axios.get('http://localhost:8081/api/v1/user/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
            });

            return response.data;
        } catch (error) {
            console.log("Usuário não autenticado: " + error);
            throw error;
        }
    }
}

export default isAuthenticated;
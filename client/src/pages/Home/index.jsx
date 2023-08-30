import { Login } from './pages/Login'

export const Home = () => {

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        (async () => {
            var response = await isAuthenticated();

            if (response !== null) {
                setIsLogged(true);
            }
        })();
    }, [])

    return (
        <Login/>
    );
}
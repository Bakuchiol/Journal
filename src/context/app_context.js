import { createContext, useState} from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [url, setUrl] = useState(null);

    const fetchAffirmations = async() => {
        const response = await axios.get('https://www.affirmations.dev/');
        let info = await response.data;
        console.log('monster list', [info])
        setUrl(info)
    }

    const fetchQuotes = async() => {
        const response = await axios.get('https://api.quotable.io/quotes/random?tags=famous-quotes');
        let info = await response.data;
        console.log('monster list', [info])
        setUrl(info)
    }

    return (
        <AppContext.Provider
        value={{
            url, setUrl,
            fetchAffirmations,
            fetchQuotes
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
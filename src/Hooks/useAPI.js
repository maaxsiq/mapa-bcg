import { useEffect, useState, useContext, createContext } from 'react';
import axios from 'axios';

const APIContext = createContext();

function APIProvider({children}) {

    const [estados, setEstados] = useState()

    useEffect(() => {
        return axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then(res => res.data)
        .then(res => setEstados(res));
    },[])

    const anos = Array.from({
        length: 10
    }).map((_,ano) => 2010 + ano)


    const provider = {
        estados,
        anos
    }

    return ( 
        <APIContext.Provider value={provider}>
            {children}
        </APIContext.Provider>
     );
}

export const useAPI = () => useContext(APIContext);

export default APIProvider;
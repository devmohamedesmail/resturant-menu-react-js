import React, { createContext,useState} from "react";



const IDContext = createContext();


export const DataProvider = ({ children }) => {
   
    const [tableID,setTableID] = useState(null);

    return (
        <IDContext.Provider value={{ tableID,setTableID}}>
            {children}
        </IDContext.Provider>
    )

};


export default IDContext;


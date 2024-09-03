import React, { createContext, useContext, useState } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
    const [isRom, setISRom] = useState(true);

    return (
        <LanguageContext.Provider value={{ isRom, setISRom }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => useContext(LanguageContext);
import React, { createContext, useContext, useState } from "react";

const CountdownContext = createContext();

export const useCountdownContext = () => useContext(CountdownContext);

export const CountdownProvider = ({ children }) => {
    const [time, setTime] = useState(1200); // Initial time in seconds
    const [hasPlayedAlert, setHasPlayedAlert] = useState(false);
    const [selectedCitaId, setSelectedCitaId] = useState(null);

    const value = {
        time,
        setTime,
        hasPlayedAlert,
        setHasPlayedAlert,
        selectedCitaId,
        setSelectedCitaId,
    };

    return (
        <CountdownContext.Provider value={value}>
            {children}
        </CountdownContext.Provider>
    );
};

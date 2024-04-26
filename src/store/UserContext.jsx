import { createContext, useContext, useState } from 'react';

const CurrentUserContext = createContext()

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => useContext(CurrentUserContext)
import React, { createContext, useState } from "react";

type User = {
    username: string,
    sessionId: string 
}

type IUserContext = {
    user: User;
    setUser: any
}


export const UserContext = createContext<Partial<IUserContext>>({});

const UserProvider: React.FC = ({ children }) => {
    const [state, setState] = useState()

    return (
        <UserContext.Provider value={{ user: state, setUser: setState }}>{children}</UserContext.Provider>
    );
};

export default UserProvider;
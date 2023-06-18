import { createContext, useContext, useState } from "react";
import { getUser } from "../data";

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [profile, setProfile] = useState(null);

  const isLoggedIn = !!userId;

  const connect = async (userId) => {
    const user = await getUser(userId);
    setUserId(userId);
    setProfile(user);
  };

  const disconnect = () => {
    setProfile(null);
  };

  return <SessionContext.Provider value={{ userId, connect, disconnect, profile, isLoggedIn }}>{children}</SessionContext.Provider>;
}

export function useSession() {
  return useContext(SessionContext);
}

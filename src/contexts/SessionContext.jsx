import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../data";

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [profile, setProfile] = useState(null);

  const isLoggedIn = !!userId;

  useEffect(() => {
    if (userId) {
      getUser(userId).then(setProfile);
    } else {
      setProfile(null);
    }
  }, [userId]);

  return <SessionContext.Provider value={{ userId, setUserId, profile, isLoggedIn }}>{children}</SessionContext.Provider>;
}

export function useSession() {
  return useContext(SessionContext);
}

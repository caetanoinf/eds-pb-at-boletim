import { useCallback } from "react";
import { auth } from "../data/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useSession } from "../contexts";
import { useProfile } from "./use-profile";

export function useAuth() {
  const session = useSession();
  const profile = useProfile();

  const signIn = useCallback(({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  }, []);

  const signUp = useCallback(async ({ email, password, name }) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    await profile.setProfile(response.user.uid, { name });
    return response;
  }, []);

  const signOut = useCallback(() => {
    return auth.signOut();
  }, []);

  return {
    authenticating: session.authenticating,
    authenticatedUser: session.authenticatedUser,
    isLoggedIn: !!session.authenticatedUser,
    signIn,
    signUp,
    signOut,
  };
}

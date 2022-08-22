import React, { createContext, ReactNode, useState } from "react";

interface IAuthContext {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>(null!);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState("null");

  const signin = () => {};

  const signout = () => {};

  return <AuthContext.Provider value={{ user, signin, signout }}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };

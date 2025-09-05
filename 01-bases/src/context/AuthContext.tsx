import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

enum AuthStatus {
  checking = 'checking',
  authenticated = 'authenticated',
  notAuthenticated = 'not-authenticated'
}

interface User {
  name: string,
  email: string,
}

interface AuthContextStateProps {
  status: AuthStatus;
  isChecking: boolean,
  isAuthenticated: boolean,
  token?: string,
  user?: User,

  loginWithEmailPassword: ( email: string, password: string ) => void,
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextStateProps)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}: PropsWithChildren) => {

  const [status, setStatus] = useState<AuthStatus>(AuthStatus.checking)
  const [user, setUser] = useState<User>()
  
  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.notAuthenticated)
    }, 1500);
  }, [])

  const loginWithEmailPassword = ( email: string, password: string ) => {
    setUser({ 
      name: 'Román Nava', 
      email: email 
    })
    setStatus(AuthStatus.authenticated)
  }

  const logout = () => {
    setUser(undefined)
    setStatus(AuthStatus.notAuthenticated)
  }

  return (
    <AuthContext.Provider value={{
      // Properties
      status: status,
      user: user,
      isChecking: status === AuthStatus.checking,
      isAuthenticated: status === AuthStatus.authenticated,

      // Method
      loginWithEmailPassword,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
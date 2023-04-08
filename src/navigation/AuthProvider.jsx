import {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {

          } catch (err) {
            alert(err);
          }
        },
        register: async (email, password) => {
          try {

          } catch (err) {
            alert(err);
          }
        },
        logout: async () => {
          try {

          } catch (err) {
            alert(err);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
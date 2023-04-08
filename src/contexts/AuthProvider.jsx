import {createContext, useState} from 'react';
import firebase from 'firebase/compat';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async ({email, password}) => {
          try {
            await firebase.default.auth().signInWithEmailAndPassword(email, password)
              .then(user => setUser(user));
          } catch (err) {
            alert(err);
          }
        },
        register: async ({email, password}) => {
          try {
            await firebase.default.auth().createUserWithEmailAndPassword(email, password)
              .then(user => setUser(user));
          } catch (err) {
            alert(err);
          }
        },
        logout: async () => {
          try {
            await firebase.default.auth().signOut();
            setUser(null);
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
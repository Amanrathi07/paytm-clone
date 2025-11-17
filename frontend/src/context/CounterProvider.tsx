
import { createContext, useState } from 'react';


const AuthContext = createContext({
 auth: 0,
 setAuth: () => {},
});

//@ts-ignore
function AuthProvider ({children}){
   const [auth, setAuth] = useState(false);

 return (
  //@ts-ignore
   <AuthContext.Provider value={{ auth, setAuth }}>
     {children}
   </AuthContext.Provider>
 );
}


export { AuthContext, AuthProvider };
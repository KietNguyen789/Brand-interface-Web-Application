import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const expiresAtString = sessionStorage.getItem('endat');
    
    console.log('token string', tokenString);
    if (tokenString && expiresAtString) {
      const expiresAt = new Date(expiresAtString);
      if (expiresAt > new Date()) {
    return tokenString
      }
      else{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('endat');
        //sessionStorage.removeItem('brand_id');
        return null;
      }
    }
      return null;
  };
  const [token, setToken] = useState(getToken());
  console.log("token in useToken", token);
  const saveToken = (userToken) => {
    userToken = userToken && userToken.startsWith('Bearer ') ? userToken.slice(7) : userToken;
    const expiresAt = new Date(new Date().getTime() + 12 *60 * 60 * 1000);
    sessionStorage.setItem('token', JSON.stringify(userToken));
    sessionStorage.setItem('endat', expiresAt.toISOString());
    setToken(userToken);
  };
  return {
   
    token,
    setToken: saveToken,
  };
}
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    const initialValue = JSON.parse(savedUser);
    return initialValue || null;
  });

  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem('token');
    return savedJwt || null;
  });

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  const login = (resUser, resToken) => {
    setUser(resUser);
    setJwt(resToken);
    localStorage.setItem('user', JSON.stringify(resUser));
    localStorage.setItem('token', resToken);
  };

  const [category, setCategory] = useState('');
  const [producto, setProducto] = useState('');
  const [value, setValue] = useState('');
  const [detail, setDetail] = useState('');

  return (
    <UserContext.Provider
      value={{
        user,
        jwt,
        logout,
        login,
        setUser,
        setJwt,
        category,
        setCategory,
        value,
        setValue,
        producto,
        setProducto,
        detail,
        setDetail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

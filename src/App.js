import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { publicRoutes } from './routes';
// co file index cua thu muc layout export
import DefaultLayout from '~/layouts/DefaultLayout';
import Signin from './pages/Signin';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import useToken from './hooks/useToken';

function App() {
  
    const {token, setToken} = useToken(); 
    console.log("token in App comp: ",token);
    console.log("setToken in App type: ",typeof setToken);
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token]);
    if(!token)
    {
        return <Signin setToken={setToken} />
    }   
    return (
      
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.Component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                            //console.log(111);
                            // khi 1 bien khong duoc dinh nghia thi no la undefined
                        } else if (route.layout === null) {
                            Layout = Fragment;
                            //console.log(222);
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
           
    );
}

export default App;

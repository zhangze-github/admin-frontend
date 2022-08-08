import {useEffect, useState} from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import {Button, Divider} from "antd";

import {HashRouter, Route, Routes} from "react-router-dom";
import User from "./page/user";
import Home from './page/home';
import SignIn from "./page/sing-in/singIn";

import {useLocation} from 'react-router-dom';
import {getToken} from "./util/token";
import {goLogin} from "./util/utils";

function App() {

    useEffect(() => {
        let hash = location.hash;
        if(hash !=='/sign-in'){
            if(!getToken()){
                goLogin()
            }
        }
    }, [])

    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    {/*<Route path="*" element={<User/>}/>*/}
                    <Route path="/home" element={<Home/>}>
                        <Route path="/home/user" element={<User/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App

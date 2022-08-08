import {useState} from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import {Button, Divider} from "antd";

import {HashRouter, Route, Routes} from "react-router-dom";
import User from "./page/user";
import Home from './page/home';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<User/>}/>
                    <Route path="*" element={<User/>}/>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App

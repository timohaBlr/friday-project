import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Outlet} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                <Route path="/posts" element={<Posts></Posts>} />
            </Routes>
        </>
    );
}

export default App;

import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import NavBar from "./components/NavBar/NavBar"

import "./App.css"
import ContactsWidget from "./components/Contact/ContactsWidget"
import useWindowDimensions from "./hooks/WindowDimensions"

function App() {
    const { width, height } = useWindowDimensions()

    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
            {width > 760 ? <ContactsWidget /> : null}
        </div>
    )
}

export default App

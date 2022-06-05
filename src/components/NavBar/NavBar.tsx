import React, { FunctionComponent, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
    UserCircle,
    At,
    List,
    House,
    FolderNotch,
    ArrowCircleLeft,
} from "phosphor-react"
import useComponentVisible from "./NavVisible"
import "./NavBar.css"

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
    //const [navVisible, setNavVisible] = useState(false)
    const currentPath = useLocation().pathname
    const { ref, isNavBarVisible, setIsNavBarVisible } =
        useComponentVisible(true)

    return (
        <div ref={ref}>
            <button
                className={isNavBarVisible ? "toggle-nav hidden" : "toggle-nav"}
                onClick={() => setIsNavBarVisible(true)}>
                <List className="toggle-icon active" />
            </button>
            <nav
                className={
                    isNavBarVisible ? "navigation" : "navigation hidden"
                }>
                <button
                    className="nav-close-btn"
                    onClick={() => setIsNavBarVisible(false)}>
                    <ArrowCircleLeft className="nav-close-icon" />
                </button>
                <ul>
                    <li
                        className={
                            currentPath === "/"
                                ? "nav-list-item active"
                                : "nav-list-item"
                        }>
                        <Link className="nav-link" to="/">
                            <span className="nav-icon">
                                <House className="icon" />
                            </span>
                            <span className="nav-item-title">Home</span>
                        </Link>
                    </li>
                    <li
                        className={
                            currentPath === "/about"
                                ? "nav-list-item active"
                                : "nav-list-item"
                        }>
                        <Link className="nav-link" to="/about">
                            <span className="nav-icon">
                                <UserCircle className="icon" />
                            </span>
                            <span className="nav-item-title">About Me</span>
                        </Link>
                    </li>
                    <li
                        className={
                            currentPath === "/projects"
                                ? "nav-list-item active"
                                : "nav-list-item"
                        }>
                        <Link className="nav-link" to="/projects">
                            <span className="nav-icon">
                                <FolderNotch className="icon" />
                            </span>
                            <span className="nav-item-title">Projects</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar

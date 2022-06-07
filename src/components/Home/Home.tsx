import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import homeAnime from "./../../assets/home_anime.gif"

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div className="home">
            <div className="home-container">
                <h1 className="home-title">Welcome to my portfolio!</h1>
                <p className="home-text">
                    I'm Carlos, a full stack dev and student
                </p>
                <div className="home-buttons">
                    <Link to="/about" className="home-link-btn">
                        <button className="home-know btn">
                            Know more about me
                        </button>
                    </Link>
                    <a
                        href="https://github.com/Carlos-E-Souza"
                        target="_blank"
                        className="home-link-btn">
                        <button className="home-connect btn">
                            Connect with me
                        </button>
                    </a>
                </div>
                <img src={homeAnime} alt="animation" className="home-anime" />
            </div>
        </div>
    )
}

export default Home

import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import "./About.css"

import MyPhoto from "../../assets/eu2.jpeg"

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
    return (
        <div className="about">
            <div className="about-container">
                <img src={MyPhoto} alt="My Photo" className="my-photo" />

                <div className="about-text-container">
                    <header>
                        <h1>About Me</h1>
                        <div className="hori-line"></div>
                    </header>
                    <p>
                        I'm currently a software engineer student at
                        UnB(Universidade de Brasília), focusing my studies on
                        web development with javascript and python. I'm a person
                        who works well in a team, always committed to learn from
                        those around me and always helping in what I can.
                    </p>
                    <h1>Experience</h1>
                    <p>Still looking for my first job. So you can hire me =)</p>
                </div>
            </div>
            <Link to="/projects" className="about-btn-proj">
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="btn-text">My Projects</span>
            </Link>
        </div>
    )
}

export default About

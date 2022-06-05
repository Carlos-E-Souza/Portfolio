import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import {
    SiPrisma,
    SiMongodb,
    SiPostgresql,
    SiReact,
    SiNodedotjs,
    SiTailwindcss,
} from "react-icons/si"

import "./About.css"

import MyPhoto from "../../assets/eu2.jpeg"

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-text-container">
                    <header>
                        <h1>About Me</h1>
                        <div className="hori-line"></div>
                    </header>
                    <p>
                        I'm currently a software engineering student at UnB
                        (University of Brasília), very focused, with clear
                        goals, passionate about technologies and software
                        development, studying web development with javascript,
                        typescript and python to become a full stack developer.
                    </p>
                    <header>
                        <h1>Goals</h1>
                        <div className="hori-line"></div>
                    </header>
                    <p>
                        Work as a web developer, improving both my professional
                        abilities and soft skills, acquire experience with real
                        development and challenges.
                    </p>
                    <header>
                        <h1>Technologies</h1>
                        <div className="hori-line"></div>
                    </header>
                    <p>
                        Here are a few technologies I've been working with
                        recently:
                    </p>
                    <ul className="tec-list">
                        <li className="tec-list-item">
                            <SiNodedotjs className="tec-icon" />
                            Node.js
                        </li>
                        <li className="tec-list-item">
                            <SiReact className="tec-icon" />
                            React.js
                        </li>
                        <li className="tec-list-item">
                            <SiMongodb className="tec-icon" />
                            MongoDB
                        </li>
                        <li className="tec-list-item">
                            <SiPostgresql className="tec-icon" />
                            Postgresql
                        </li>
                        <li className="tec-list-item">
                            <SiPrisma className="tec-icon" />
                            Prisma
                        </li>
                        <li className="tec-list-item">
                            <SiTailwindcss className="tec-icon" />
                            Tailwind.css
                        </li>
                    </ul>
                    <header>
                        <h1>Experience</h1>
                        <div className="hori-line"></div>
                    </header>
                    <p>Still looking for my first job. So you can hire me =)</p>
                </div>
                <img src={MyPhoto} alt="My Photo" className="my-photo" />
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

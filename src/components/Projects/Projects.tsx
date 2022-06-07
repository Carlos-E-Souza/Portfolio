import React, { FunctionComponent, useEffect, useState } from "react"
import axios from "axios"
import Repositorie from "../Repositorie/Repositorie"
import "./Projects.css"

interface RepoTypes {
    obj: {
        id: number
        name: string
        description: string
        language: string
        html_url: string
    }[]
}

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
    const defaultObj: RepoTypes["obj"] = []
    const [repos, setRepos]: [
        RepoTypes["obj"],
        (repos: RepoTypes["obj"]) => void
    ] = useState(defaultObj)

    useEffect(() => {
        axios
            .get("https://api.github.com/users/Carlos-E-Souza/repos")
            .then((response) => {
                setRepos(response.data)
            })
            .catch((error) => {
                console.log(error)
                window.history.back()
            })
    }, [])

    return (
        <div className="projects">
            <h1 className="projects-title">Some of My Projects</h1>
            <div className="repos-container">
                {repos.map((repo) => (
                    <Repositorie
                        key={repo.id}
                        repoName={repo.name}
                        repoDesc={repo.description}
                        repoLang={repo.language}
                        repoUrl={repo.html_url}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects

import { FunctionComponent, useState } from "react"
import { Link } from "react-router-dom"
import { FolderNotch, Link as ILink } from "phosphor-react"
import "./Repositorie.css"

interface RepositorieProps {
    repoName: string
    repoDesc: string
    repoLang: string
    repoUrl: string
}

const Repositorie: FunctionComponent<RepositorieProps> = (props) => {
    const { repoName, repoLang, repoUrl, repoDesc } = props

    if (repoName === "Carlos-E-Souza") {
        return null
    }

    return (
        <a href={repoUrl} target="_blank" className="repo-card group">
            <header className="repo-card-header">
                <FolderNotch className="folder-icon" />{" "}
                <ILink className="link-icon" />
            </header>
            <h2 className="repo-title group-hover:text-surface-third">
                {repoName}
            </h2>
            <p>{repoDesc}</p>
            <span className="repo-lang">{repoLang}</span>
        </a>
    )
}

export default Repositorie

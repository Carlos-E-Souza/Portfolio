import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import './Repositorie.css'

interface RepositorieProps {
    repoName: string;
    repoLang: string;
    repoUrl: string;
}
 
const Repositorie: FunctionComponent<RepositorieProps> = (props) => {
    const { repoName, repoLang, repoUrl} = props

    if(repoName === 'Carlos-E-Souza/Carlos-E-Souza') {
        return null
    }

    return (  
        <Link to={repoUrl} className='repo-card'>
            <p>{repoName}</p>
            <p className='repo-lang'>Language: {repoLang}</p>
        </Link>
        
    );
}
 
export default Repositorie;
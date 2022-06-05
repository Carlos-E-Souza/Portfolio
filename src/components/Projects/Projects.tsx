import React, { FunctionComponent, useEffect, useState} from 'react'
import axios from 'axios'
import Repositorie from '../Repositorie/Repositorie'
import RepoTypes from './ReposProps'
import './Projects.css'

interface ProjectsProps {
}
 
const Projects: FunctionComponent<ProjectsProps> = () => {
    
    const defaultObj:RepoTypes['obj'] = []
    const [repos, setRepos]:[RepoTypes['obj'], (repos: RepoTypes['obj'])=>void] = useState(defaultObj)

    useEffect(() => {
        axios.get('https://api.github.com/users/Carlos-E-Souza/repos')
        .then(response => {
            // manipula o sucesso da requisição
            setRepos(response.data);
        })
        .catch(error => {
            console.log(error)
            window.history.back()
        })
    }, [])
    
    return (  
        <div className='projects-container'>
            {repos.map(repo => (
                <Repositorie 
                    key={repo.id} 
                    repoName={repo.full_name} 
                    repoLang={repo.language} 
                    repoUrl={repo.html_url}
                />
            ))}
        </div>
    );
}
 
export default Projects;
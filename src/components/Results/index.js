import React from 'react';
import './style.css'

function Results({result}) {
  const renderRepos = () => {
    return result.map( (repo, i) => 
  <div className='result-container'>
      <li className='list' key={`repo${i}`} >
       Repo Name: <br/><span>{repo.name}</span> .<br/>
       This is a  <span>{repo.visibility}</span> repo with <span>{repo.forks_count} {repo.forks_count === 1 ? 'fork': 'forks'}</span><br/>
       Number of Stargazers:<span> {repo.stargazers_count}</span> <br/>
        Number of open issues: <span>{repo.open_issues_count} </span>
        <br/> <br/>
      </li>
      </div>
      
      )
  }
  return (
    <ul>
      {renderRepos()}
    </ul>
  )
}

export default Results

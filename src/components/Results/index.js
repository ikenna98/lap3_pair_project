import React from 'react';

function Results({result}) {
  const renderRepos = () => {
    return result.map( (repo, i) => 
      <li key={`repo${i}`} >
        Repo Name: {repo.name} <br/>
        This is a {repo.visibility} repo with {repo.forks_count} {repo.forks_count === 1 ? 'fork': 'forks'}<br/>
        Number of Stargazers: {repo.stargazers_count} <br/>
        Number of open issues: {repo.open_issues_count} 
        <br/> <br/>
      </li>
      )
  }
  return (
    <ul>
      {renderRepos()}
    </ul>
  )
}

export default Results

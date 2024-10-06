import React from 'react'

function ProjectCard({src, link, target, rel, h3, p}) {
  return (
    <a href={link} target={target} rel={rel}><img className="hover" src={src} alt={`${h3} logo`}></img> 
        <h3>{h3}</h3>
        <p>{p}</p>
        </a>
  );
}

export default ProjectCard
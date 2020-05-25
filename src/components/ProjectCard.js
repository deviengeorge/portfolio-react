import React from "react";

function ProjectCard({ backgroundImg, name, details, livelink, gitlink }) {
  return (
    <div className='project shadow-large'>
      <div className='project-image'>
        <img
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
          alt=''
        />
      </div>
      <div className='project-info'>
        <h3 className='text-capitalize'>{name}</h3>
        <p>{details}</p>
        <div className='skills-badges'>
          <span className='badge badge-primary'>React</span>
          <span className='badge badge-primary'>Html</span>
          <span className='badge badge-primary'>Css</span>
        </div>
        {/* if live Link property is null than live preview button will not return */}
        {livelink !== null ? (
          <a href={livelink} className='button'>
            Live Preview
          </a>
        ) : null}
        <a href={gitlink} className='button'>
          Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

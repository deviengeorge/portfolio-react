import React from "react";
import ProjectCard from "./ProjectCard";
import ImgsUrl from "../ImgsUrl";

const projectsDetails = [
  {
    Img: ImgsUrl.website1,
    title: "css grid exapmle",
    detail:
      "this website is build with gulp and react js with react router and redux and webpack",
    live: "https://cosmo-junkie.netlify.app/",
    git: "https://github/deviengeorge",
  },
  {
    Img: ImgsUrl.boilerplate,
    title: "BoilerPlate Graphql, Apollo, React",
    detail:
      "This BoilerPlate for those how want to build React Apps with GraphQL, Apollo without worry about packages that need to be installed.",
    live: null,
    git: "https://github.com/deviengeorge/BoilerPlate-GraphQl-Apollo-React",
  },
  {
    Img: ImgsUrl.website2,
    title: "React Advice App",
    detail:
      "this website is fetching random advice from online API and display it.",
    live: "https://css-grid-titles-example.netlify.app/",
    git: "https://github.com/deviengeorge/mutliple-titles",
  },
  {
    Img: ImgsUrl.website3,
    title: "CSS Grid Example",
    detail:
      "this website example on Css Grid to create titles or windows on webpage",
    live: "https://css-grid-titles-example.netlify.app/",
    git: "https://github.com/deviengeorge/mutliple-titles",
  },
  {
    Img: ImgsUrl.website4,
    title: "React Movie IMDB",
    detail:
      "This website is for searching for movie on IMDB API that fetched with Axios and displayed information on the website like rating, name, details and so on.",
    live: "https://react-movie-db-devien-george.netlify.app/",
    git: "https://github.com/deviengeorge/react-movie-db",
  },
  {
    Img: ImgsUrl.website6,
    title: "React Weather App",
    detail:
      "This website is for searching for weather on Openweathermap API that fetched with fetch function and displayed information on the website.",
    live: "https://weather-ract-app-devien-george.netlify.app/",
    git: "https://github.com/deviengeorge/weather-react-app",
  },
];

function Projects() {
  return (
    <div id='projects' className='background-alt' name='Projects'>
      <h2 className='heading'>Projects</h2>
      <div className='container'>
        <div className='row'>
          {/* Function to render and map through every project that type in constant projectDetails  */}
          {projectsDetails.map((project) => {
            return (
              <ProjectCard
                backgroundImg={project.Img}
                name={project.title}
                details={project.detail}
                livelink={project.live}
                gitlink={project.git}
              />
            );
          })}
          {/* <ProjectCard
            backgroundImg={ImgsUrl.website1}
            name='Weather React App'
            details='this website is build with gulp and react js with react router and redux and webpack'
            livelink='https://netlify.com'
            gitlink='https://github/deviengeorge'
          />
          <ProjectCard
            backgroundImg={ImgsUrl.website2}
            name='COVID-19 React App'
            details='this website is build with gulp and react js with react router and redux and webpack'
            livelink='https://cosmo-junkie.netlify.app/'
            gitlink='https://github/deviengeorge'
          />
          <ProjectCard
            backgroundImg={ImgsUrl.website3}
            name='Practise React Bootstrap'
            details='this website is build with Bootstrap and react js with react router'
            livelink='https://practise-reaact-bootstrap-devien-george.netlify.app/'
            gitlink='https://github/deviengeorge'
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;

import './index.css'
import ProjectsJSON from '../../data/projects.json' 
import { useState } from 'react'

export const Projects = () => {

    const [limit, setLimit] = useState(3);
    return (
      <div className="projects-container" id='my-projects'>
          <h1>My <span>Projects</span></h1>

          <div onClick={() => setLimit(ProjectsJSON.length)} className="see-all-btn">See All</div>
          <div className="projects">{
            ProjectsJSON.map((project, index) => {
              if (index >= limit) return
              const {img, text} = project
              return (
                <Project img={img} text={text} />
              )
            })
          }
          </div>
      </div>
    )
}
  

const Project = ({img, text}) => {
  return (
    <div className="project">
      <div className="left">
        <div className="white-rectangle"></div>
        {/* <img src={img} alt="" /> */}
        {/* The above is only necessary if you want images */}
      </div>
      <div className="right">
        <h4>{text}</h4>
      </div>
    </div>
  )
}

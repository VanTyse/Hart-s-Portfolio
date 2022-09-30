import { useState } from 'react'
import './index.css'

export const AboutMe = () => {
  const [show, setShow] = useState('about-me')

  return (
    <div className="about-me-container" id='about-me'>
      <h1>About <span>Me</span></h1>

      <div className="nav">
        <div className="nav-items">
          <div className={`nav-item ${show === 'about-me' && 'active'}`}
            onClick={() => setShow('about-me')}          
          >About Me</div>
          <div className={`nav-item ${show === 'experience' && 'active'}`}
            onClick={() => setShow('experience')}
          >Experience</div>
          <div className={`nav-item ${show === 'skillset' && 'active'}`}
            onClick={() => setShow('skillset')}
          >Skillset</div>
          <div className={`nav-item ${show === 'education' && 'active'}`}
            onClick={() => setShow('education')}
          >Education</div>
        </div>
      </div>

      <div style={{position: 'relative'}}>
      <div className={`other about-me ${show === 'about-me' && 'show-other'}`}>
        <div className="left">
          <div className="white-rectangle"></div>
        </div>
        <div className="right">
          <p>Quam gravida praesent maecenas aliquet turpis adipiscing sit. Venenatis nunc diam ut pellentesque lobortis. Et blandit at velit molestie.</p>
          <p>Quam gravida praesent maecenas aliquet turpis adipiscing sit. Venenatis nunc diam ut pellentesque lobortis. Et blandit at velit molestie.</p>
          <p>Quam gravida praesent maecenas aliquet turpis adipiscing sit. Venenatis nunc diam ut pellentesque lobortis. Et blandit at velit molestie.</p>
        </div>
      </div>

      <div className={`other experience ${show === 'experience' && 'show-other'}`}>Experience</div>

      <div className={`other skillsets ${show === 'skillset' && 'show-other'}`}>Skillset</div>

      <div className={`other education ${show === 'education' && 'show-other'}`}>Education</div>
      </div>
    </div>
  )
}
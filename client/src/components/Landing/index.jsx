import './index.css'
import DownloadIcon from '../../assets/icons/Download.svg'

export const Landing = () => {
    return (
      <div className="landing" id='home'>
        <div className="left">
          <h1>Hi,</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum interdum et morbi quis cras volutpat venenatis.</h2>
          <div className="buttons">
            <button className="review-cv">Review CV</button>
            <button className="download">
              <img src={DownloadIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="right">
          {/* This will be changed as soon as an image is actually put */}
          <div className="image-container">
            <div className="image">
              {/* <img src="" alt="" /> */} 
            </div>
          </div>
          <div className="info">
            <div>
            <h3 className="name">Uche Hart</h3>
            <h4 className="role"><em>Software Developer</em></h4>
            </div>
          </div>
        </div>
        <div className="background-lines"></div>
      </div>
    )
}
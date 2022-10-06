import './index.css'
import {useLocation} from 'react-router-dom'
import Instagram from '../../assets/icons/Instagram.svg'
import LinkedIn from '../../assets/icons/LinkedIn.svg'
import Twitter from '../../assets/icons/Twitter.svg'
import { useState } from 'react'
import { SideBar } from '../SideBar'

export const Header = () => {
    const pathname = useLocation().hash
    
    const [showContactModal, setShowContactModal] = useState(false)
    const [showSideBar, setShowSideBar] = useState(false)

    return(
        <>
        <div className="header">
            <div className="desktop">
                <nav>
                    <ul className="nav-items">
                        <li className="nav-item" style={{
                            color : (pathname.match('home')) && '#6A6A6A'
                        }}>
                            <a href="#home">Home</a>
                        </li>
                        <li className="nav-item" style={{
                            color : (pathname.match('my-services')) && '#6A6A6A'
                        }}>
                            <a href="#my-services">My Services</a>
                        </li>
                        <li className="nav-item" style={{
                            color : (pathname.match('my-projects')) && '#6A6A6A'
                        }}>
                            <a href="#my-projects">My projects</a>
                        </li>
                        <li className="nav-item" style={{
                            color : (pathname.match('about-me')) && '#6A6A6A'
                        }}>
                            <a href="#about-me">About me</a>
                        </li>
                        <div className="menu-btn" onClick={() => setShowSideBar(state => !state)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <li className="nav-item contact" onClick={() => setShowContactModal(state => !state)} style={{
                            color : (pathname.match('contact-me')) && '#6A6A6A'
                        }}>
                            <a href="#">Contact Me </a>
                            <svg width="14" height="7" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.92 0.949951L10.4 7.46995C9.63 8.23995 8.37 8.23995 7.6 7.46995L1.08 0.949951" stroke="#676767" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Contact show={showContactModal}/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <SideBar show={showSideBar} setShow={setShowSideBar}/>
        </>
    )
}


const Contact = ({show}) => {
    return(
        <div className="contact-sub-modal" style={{display: !show && 'none'}}>
            <div className="socials">
                <div className="icons">
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Twitter} alt="" />
                </div>
                <span>@hartsworkshophq</span>
            </div>
            <div className="phone">
                <div className="sub-heading">Place Call</div>
                <span>+234(0)8055597999</span>
            </div>
            <div className="email">
            <div className="sub-heading">Send Email</div>
            <span>uchehart@gmail.com</span>
            </div>
            <div className="hire-me-btn"></div>
        </div>
    )
}
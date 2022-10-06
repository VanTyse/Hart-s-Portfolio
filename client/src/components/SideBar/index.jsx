import './index.css'
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react'

export const SideBar = ({show, setShow}) => {
    const pathname = useLocation().hash
    let timeout
    useEffect(() => {
        return () => clearTimeout(timeout)
    }, [show])

    return (
        <div className={`sidebar ${show && 'show-sidebar'}`}>
            <nav>
                <ul className="nav-items">
                    <li className="nav-item" style={{
                        color : (pathname.match('home')) && '#000'
                    }} onClick={() => {
                        timeout = setTimeout(() => {setShow(false)}, 1000)
                    }}>
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav-item" style={{
                        color : (pathname.match('my-services')) && '#000'
                    }} onClick={() => {
                        timeout = setTimeout(() => {setShow(false)}, 1000)
                    }}>
                        <a href="#my-services">My Services</a>
                    </li>
                    <li className="nav-item" style={{
                        color : (pathname.match('my-projects')) && '#000'
                    }} onClick={() => {
                        timeout = setTimeout(() => {setShow(false)}, 1000)
                    }}>
                        <a href="#my-projects">My projects</a>
                    </li>
                    <li className="nav-item" style={{
                        color : (pathname.match('about-me')) && '#000'
                    }} onClick={() => {
                        timeout = setTimeout(() => {setShow(false)}, 1000)
                    }}>
                        <a href="#about-me">About me</a>
                    </li>
                </ul>
            </nav>
            <div className="close-icon" onClick={() => setShow(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
        </div>
    )
}
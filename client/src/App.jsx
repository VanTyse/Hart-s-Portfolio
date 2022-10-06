import { useState } from 'react'
import { Header, Services, Landing, Projects, AboutMe, SideBar } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Services/>
      <Projects/>
      <AboutMe/>
    </div>
  )
}


export default App

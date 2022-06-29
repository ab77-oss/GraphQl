import React from 'react'
import AddClientModel from '../components/AddClientModel'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import AddProjectModal from '../components/AddProjectModal'

function Home() {
  return (
    <>
      <div  className= 'd-flex gap-3 mb-4'>
      <AddClientModel />
      <AddProjectModal />
      </div>
        <Projects />
        <hr/>
        <Clients />
    
    
    </>
  )
}

export default Home
import React from 'react'
import CenterBody from './CenterBody'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <main>
       <Sidebar />
       <CenterBody />
       <Rightbar />   
    </main>
  )
}

export default Dashboard
import React from 'react'
import JsonData from '../GetData'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <JsonData />
    </div>
  )
}

export default Dashboard
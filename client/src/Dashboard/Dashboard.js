import React from 'react'
import Sidebar from '../Component/Sidebar';
import style from '../Style/Sidebar.module.css';
import MainContent from '../Component/MainComponent';

function Dashboard() {
  return (
    <div className={style.Dashboard}>
    <Sidebar/>
    <MainContent/>
    </div>
  )
}

export default Dashboard;

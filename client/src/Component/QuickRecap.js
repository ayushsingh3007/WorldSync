import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Style/MainComponent.module.css';


function QuickRecap() {
  return (
    <>
        <div className={style.quickaccess}>
          <h2>Quick Access</h2>
          <div className={style.holidays}>
            <div className={style.holidayhead}><h3>Holidays</h3><Link to="/">View All</Link></div>
            <div className={style.holidayitem}>
              <button>&lt;</button>
              <span>Independence Day</span>
              <span>Thu, 15 August, 2024</span>
              <button>&gt;</button>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default QuickRecap;

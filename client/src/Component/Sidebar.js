import React from 'react';
import Style from '../Style/Sidebar.module.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

function Sidebar() {
  return (
        <>
        <ul className={Style.SidebarContainer}>
          <li><IoHomeOutline /> Home</li>
          <li>Leaves</li>
          <li>Continual</li>
          <li>Continuation</li>
          <li>Edit Profile</li>
          <li>Add Employee
          </li>
          <li>Add post </li>
          <div className={Style.ProfileandLogoutContainer}>
        <div className={Style.Profileimage}>m</div>
        <div >
          <p>profile name </p>
          <div><LuLogOut /> logout</div>
        </div>
          </div>
        </ul>
         
        </>
    
  );
}

export default Sidebar;

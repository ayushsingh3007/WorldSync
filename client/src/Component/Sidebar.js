import React from 'react';
import Style from '../Style/Sidebar.module.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

function Sidebar() {
  return (
<<<<<<< HEAD
      <ul className={Style.SidebarContainer}>
        <li><IoHomeOutline /> Home</li>
        <li>Leaves</li>
        <li>Continual</li>
        <li>Continuation</li>
        <li>Edit Profile</li>
        <li>Add Employee
        </li>
        <li>Add post </li>
      </ul>

=======
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
    
>>>>>>> 2243fc356576a5c5da9442e29bd0b7492581663a
  );
}

export default Sidebar;

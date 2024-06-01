import React from 'react';
import Style from '../Style/Sidebar.module.css'
import { IoHomeOutline } from "react-icons/io5";
function Sidebar() {
  return (
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

  );
}

export default Sidebar;

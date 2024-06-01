import React from 'react';
import { VscGlobe } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import style from '../Style/header.module.css';
import { FaSignInAlt } from 'react-icons/fa';
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={style.siteheader}>
      <nav className={style.navtop}>
        <div className={style.container}>
          <span className={style.brandlogo}>1Worldsync</span>
          <div className={style.searchbar}>
            <div className={style.hexagon}>
              <input type="text" placeholder="Search..." className={style.searchinput} />
              <button className={style.searchbtn}><IoSearch /></button>
            </div>
          </div>
          <VscGlobe className={style.globeicon} />
          <Link to={"/login"}>
          <button className={style.loginbtn}>
            <FaSignInAlt /> Login
          </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
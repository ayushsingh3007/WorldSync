import React from 'react';
import QuickRecap from './QuickRecap';
import style from '../Style/MainComponent.module.css';
import Announcements from './Announcements';
import Inbox from './Inbox';
import Post from './Post';
function MainContent() {
  return (
    <section className={style.homesection}>
      <QuickRecap />
      <Post />
      <Inbox />
      <Announcements />
    </section>
  );
}

export default MainContent;

import React from 'react';
import QuickRecap from './QuickRecap';
import Announcements from './Announcements';
import Post from './Post';

function MainContent() {
  return (
    <main>
      <QuickRecap />
      <Announcements />
      <Post />
    </main>
  );
}

export default MainContent;

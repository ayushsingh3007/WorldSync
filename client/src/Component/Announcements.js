import React,{useState} from 'react';
import style from '../Style/MainComponent.module.css';
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa6";
function Announcements() {
  const [showInputBox, setShowInputBox] = useState(false);
  const handleCommentIconClick = () => {
    setShowInputBox(!showInputBox);
  };
  return (
    <section>
      <div className={style.announcements}>
        <h3>Announcements</h3>
        <p>🎂 Birthdays</p>
        <p>🏆 Work Anniversaries</p>
        <p>👥 New Joinees</p>
        <div className={style.recentposts}>
          <p>Keerthiga Senthilmurugan created a post 4 months ago.</p>
          <p>Good Morning all!</p>
          <div className={style.actions}>
            <BiLike  />
            <FaRegCommentDots className={style.commentIcon} onClick={handleCommentIconClick} />
          </div>
          {showInputBox && (
          <input
            type="text"
            placeholder="Write a comment..."
            className={style.commentInput}
          />
        )}
        </div>
      </div>
    </section>
  );
}

export default Announcements;

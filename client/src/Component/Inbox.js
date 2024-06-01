import React from 'react';
import style from '../Style/MainComponent.module.css';
function Inbox() {
  return (
    <section>
      <div className={style.inbox}>
        <h2>Inbox</h2>
        <div className={style.message}>
          <span role="img" aria-label="mail">📧</span>
          <span>Good Job! You have no pending actions.</span>
        </div>
      </div>
    </section>
  );
}

export default Inbox;

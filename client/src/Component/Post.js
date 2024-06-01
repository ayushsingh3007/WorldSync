import React from "react";
import style from '../Style/MainComponent.module.css';
function Post() {
    return (
        <>
            <section>
                <div className={style.organizations}>
                    <div className={style.tabs}>
                        <button>Organizations</button>
                        <button>Human Resources</button>
                    </div>
                    <div className={style.postpraise}>
                        <div className={style.head}><h3>Post</h3><h3>Praise</h3></div>
                        <textarea placeholder="Write your post here and mention your peers"></textarea>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Post;
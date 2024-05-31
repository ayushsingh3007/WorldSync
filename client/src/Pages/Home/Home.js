import React from 'react'
import style from '..//../Style/home.module.css';

const Home = () => {
    return (
        <div>
            <div className={style.container_main_slider}>
                <div className={style.container_slider}>
                    <h1>We make sure your <br className={style.d_block} />product content</h1>
                    <h2 className={style.container_slider_h2}>See how the leading platform for product content orchestration will simplify<br className={style.d_none} />
                        the creation and distribution of your product content.</h2>
                    <div className={style.container_slider_button_div}>
                        <button className={style.container_slider_button_one}>Tour the Platform</button>
                        <button className={style.container_slider_button_two}>View Plans</button>

                    </div>
                </div>
            </div>
            <div className={style.split_content_logos}>
                <div className={style.split_content_logos_container}>
                    <div className={style.split_content_logos_data}>
                        <div className={style.split_content_logos_data_wrap}></div>
                        <div className={style.split_content_logos_data_content}>
                            <h2 className={style.split_content_logos_data_content_h3}>Join the Leading Commerce Network</h2>
                            <p className={style.split_content_logos_data_content_p}>1WorldSync powers 85% of the world’s leading brands and retailers with access to the most
                                current and complete product information—globally and locally.</p>
                            <div className={style.split_content_logos_data_content_p}>Need to publish content? Connect with your trading partners here.</div>
                            <div className={style.split_content_logos_data_content_hero_action}>
                            <button className={style.split_content_logos_data_content_hero_action_button_one}>Browse All Trading Partners </button>
                            <button className={style.split_content_logos_data_content_hero_action_button_two}>Become a Content Recipient</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import style from '..//../Style/home.module.css';
import { FaPlay } from 'react-icons/fa';
import Sliders from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {

    const slider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false
    };

    return (
        <div>
            <div className={style.container_main_slider}>
                <div className={style.container_slider}>
                    <h1 className={style.container_slider_h1}>We make sure your <br className={style.d_block} />product content</h1>
                    <div className={style.container_slider_swipper}>
                        <Sliders {...slider}>
                            <div className={style.container_main_slider_item_one}>
                                <div className={style.container_main_slider_item_one_heading}>
                                    <h1 className={style.container_main_slider_item_four_consistent}>is consistent</h1>
                                </div>
                            </div>
                            <div className={style.container_main_slider_item_two}>
                                <h1 className={style.container_main_slider_item_four_accurate}>is accurate</h1>
                            </div>
                            <div className={style.container_main_slider_item_three}>
                                <h1 className={style.container_main_slider_item_four_organized}>is organized</h1>
                            </div>
                            <div className={style.container_main_slider_item_one}>
                                <h1 className={style.container_main_slider_item_four_converts}>converts</h1>
                            </div>
                            <div className={style.container_main_slider_item_four}>
                                <h1 className={style.container_main_slider_item_four_shine}>shines</h1>
                            </div>
                            <div className={style.container_main_slider_item_two}>
                                <h1 className={style.container_main_slider_item_four_relevant}>is relevant</h1>
                            </div>
                        </Sliders>
                    </div>
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
                        <div className={style.split_content_logos_data_wrap}>
                            <div className={style.split_content_logos_data_wrap_logo}>
                                <img src='/home/sams-club.webp' alt='.' />
                            </div>
                            <div className={style.split_content_logos_data_wrap_logo}>
                                <img src='/home/img-doordash.webp' alt='.' />
                            </div>
                            <div className={style.split_content_logos_data_wrap_logo}>
                                <img src='/home/walmart.webp' alt='.' />
                            </div>
                            <div className={style.split_content_logos_data_wrap_logo}>
                                <img src='/home/albertsons.webp' alt='.' />
                            </div>
                            <div className={style.split_content_logos_data_wrap_logo}>
                                <img src='/home/kroger-sm.webp' alt='.' />
                            </div>
                            <div className={style.split_content_logos_data_wrap_logo}>
                                <img src='/home/img-amazon.webp' alt='.' />
                            </div>
                        </div>
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
            <div className={style.video_split}>
                <div className={style.video_container}>
                    <div className={style.video_container_row}>
                        <div className={style.video_container_data}>
                            <div className={style.video_container_data_video}>
                                <div className={style.video_container_data_video_ratio}>
                                    <video>

                                    </video>

                                </div>

                            </div>
                            <div className={style.video_container_data_content}>
                                <h2 className={style.video_container_data_content_h2}>Content That Makes an Impact</h2>
                                <p className={style.video_container_data_content_p}>How do you make sure you always have the best, most current product content that
                                    is consistent across every channel in a fast-moving market?</p>
                                <p className={style.video_container_data_content_p}>With 1WorldSync  the leading Product Content Orchestration platform  creating,
                                    distributing and receiving product content is seamless.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.intro_cards}>
                    <div className={style.intro_cards_container}>
                        <div className={style.intro_cards_data}>
                            <div className={style.intro_cards_data_row}>
                                <h2 className={style.intro_cards_data_row_h2}>What are your product content needs?</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.container_stats}>
                <div className={style.container_stats_row}>
                    <div className={style.container_stats_row_content}>
                        <h2 className={style.container_stats_row_content_h2}>Results Worth Measuring</h2>
                        <p className={style.container_stats_row_content_p}>Our customers get their products to market faster, increase conversions and reduce errors. And thats just part of the reason why they orchestrate their product content with 1WorldSync. </p>
                    </div>
                    <div className={style.container_stats_row_content_two}>
                        <div className={style.container_stats_row_content_two_row}>
                            <div className={style.container_stats_row_content_two_row}>
                                <div className={style.container_stats_row_content_two_row_card}>
                                    <div className={style.container_stats_row_content_two_row_card_left}>
                                        <FaPlay size="1.2em" style={{ marginLeft: '10px' }} />
                                    </div>
                                    <div className={style.container_stats_row_content_two_row_card_right}>
                                        <div className={style.container_stats_row_content_two_row_card_right_value}>75%</div>
                                        <h3 className={style.container_stats_row_content_two_row_card_right_h3}>Reduction in time to market</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={style.container_stats_row_content_two_row}>
                                <div className={style.container_stats_row_content_two_row_card}>
                                    <div className={style.container_stats_row_content_two_row_card_left}>
                                        <FaPlay size="1.2em" style={{ marginLeft: '10px' }} />
                                    </div>
                                    <div className={style.container_stats_row_content_two_row_card_right}>
                                        <div className={style.container_stats_row_content_two_row_card_right_value}>32%</div>
                                        <h3 className={style.container_stats_row_content_two_row_card_right_h3}>Reduction in time to market</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={style.container_stats_row_content_two_row}>
                                <div className={style.container_stats_row_content_two_row_card}>
                                    <div className={style.container_stats_row_content_two_row_card_left}>
                                        <FaPlay size="1.2em" style={{ marginLeft: '10px' }} />
                                    </div>
                                    <div className={style.container_stats_row_content_two_row_card_right}>
                                        <div className={style.container_stats_row_content_two_row_card_right_value}>68%</div>
                                        <h3 className={style.container_stats_row_content_two_row_card_right_h3}>Reduction in time to market</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.g2_badge}>
                <div className={style.g2_badge_container}>
                    <div className={style.g2_badge_container_inner}>
                        <div className={style.g2_badge_container_inner_data}>
                            <img src='/home/g2_1worldsync_pim_leaders-summer23.webp' alt='.' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.zig_zag_arrow}>
                <div className={style.zig_zag_arrow_container}>
                    <div className={style.zig_zag_arrow_container_header_section}>
                        <h2 className={style.zig_zag_arrow_container_header_section_h2}>We re Here for You</h2>
                        <p className={style.zig_zag_arrow_container_header_section_p}>Get one-on-one help from our GDSN and product content experts, engage with a community of
                            peers or <br></br> <br className={style.zig_zag_arrow_container_header_section_d_none} />go at your own pace with our education and training courses and
                            library.</p>
                    </div>
                    <div className={style.zig_zag_item}>
                        <div className={style.zig_zag_item_data}>
                            <div className={style.zig_zag_item_data_image}>
                                <div className={style.zig_zag_item_data_image_arrow_head}>
                                    <img decoding="async" src="/home/support_home_section1.jpg" alt="" data-ll-status="loaded" />
                                </div>
                            </div>
                            <div className={style.zig_zag_item_data_content}>
                                <h2 className={style.zig_zag_item_data_content_h2}>Top-tier Support for Customers Large and Small</h2>
                                <p className={style.zig_zag_item_data_content_p}>No added costs for industry-leading support. Just universal, timely access to our
                                    passionate, expert customer experience professionals.</p>
                                <div className={style.zig_zag_item_data_content_action}>
                                    <button className={style.zig_zag_item_data_content_action_button_one}><span className={style.zig_zag_item_data_content_action_button_span}>Contact Us to</span> Learn More</button>
                                    <button className={style.zig_zag_item_data_content_action_button_two}>Contact Support<i class="fa-solid fa-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.zig_zag_item_flipped}>
                        <div className={style.zig_zag_item_data_flipped}>
                            <div className={style.zig_zag_item_data_image_flipped}>
                                <div className={style.zig_zag_item_data_image_arrow_head_flipped}>
                                    <img decoding="async" src="/home/community_home_section2.jpg" alt="" class="lazyloaded" data-ll-status="loaded" />
                                </div>
                            </div>
                            <div className={style.zig_zag_item_data_content}>
                                <h2 className={style.zig_zag_item_data_content_h2}>Collaborate with Your Peers and Partners</h2>
                                <p className={style.zig_zag_item_data_content_p}>With thousands of active users, 1WorldSync Community connects data masters, e-comm
                                    specialists, sales managers, retailers and distributors with tactical product content resources.
                                    Access free training, read expert insights and collaborate with peers.</p>
                                <div className={style.zig_zag_item_data_content_action}>
                                    <button className={style.zig_zag_item_data_content_action_button_one}>Browse Community</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.zig_zag_item}>
                        <div className={style.zig_zag_item_data}>
                            <div className={style.zig_zag_item_data_image}>
                                <div className={style.zig_zag_item_data_image_arrow_head}>
                                    <img decoding="async" src="/home/training_home_section3.jpg" alt="" data-ll-status="loaded" />
                                </div>
                            </div>
                            <div className={style.zig_zag_item_data_content}>
                                <h2 className={style.zig_zag_item_data_content_h2}>Product Content Management & Syndication Training</h2>
                                <p className={style.zig_zag_item_data_content_p}>1WorldSyncs Education & Training programs provide users the opportunity to
                                    address their organizations needs, connect one-on-one with our team of experts, troubleshoot
                                    platform issues live and more. Instructor-led virtual sessions are offered weekly..</p>
                                <div className={style.zig_zag_item_data_content_action}>
                                    <button className={style.zig_zag_item_data_content_action_button_one}><span className={style.zig_zag_item_data_content_action_button_span}>Contact Us to</span> Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home
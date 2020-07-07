import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';
import { useState } from 'react';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop/Backdrop';

const golf = () => {

    const [ sideDrawerOpen, setSideDrawerOpen ] = useState( false );

    let backdrop;
    if ( sideDrawerOpen ) {
        backdrop = <Backdrop click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />;
    }

    return (
        <div className='container'>
            <Head>
                <title>Beam | Golf</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
            <SideDrawer show={sideDrawerOpen} />
            { backdrop }
            <div className='box animation'>
                <h1>Why I started playing golf?</h1>
                <p>I started playing golf since I was 10 years old. When I was younger, my parents wanted me to go out and do some activities, so my dad took me to the golf course on Saturday with him to play golf with his friends. We would go to different golf courses every week and that when I realized that I love golf more than other sports because I get to experience new things and go to new places all the time.</p>
            </div>
            <div className='box animation'>
                <h1>Golf Timeline</h1>
                <div className='time'>
                    <h3>Junior golf in Thailand</h3>
                    <h4>2010-2014</h4>
                    <p>Back when I started playing golf. I started playing in a small organization that hosts tournaments for junior golfer who just stared playing golf. After winning a few small tournaments. I know that I'm ready for more challenges, so I started to playing in TJGA, which stands for "Thailand Junior Golf Association". Growing up in the city, my practice facility was only limited to a driving range that is close to my house. That's when my family decided to send me to IMG Academy in Florida where there will be more facilities that are ready for my to utilize.</p>
                </div>
                <div className='time'>
                    <h3>IMG Academy -- 2014-2018</h3>
                    <h4>2014-2018</h4>
                    <p>Florida was a lot of fun, but it also comes with a lot of struggle. It was my first time that I had to be far from home and live in the dormitory by myself. I wasn't fluent in English either, which made my life a little harder when I tried to make any friends. By the end of my senior year, I've learned to fit in to the society in the United States and ready for the chapter of my life. I wanted to experience more than just Florida, that's when I decided to move to California and commited to University of California, Davis.</p>
                </div>
                <div className='time'>
                    <h3>UC Davis</h3>
                    <h4>2018-2020</h4>
                    <p>First year at UC Davis was a lot of fun. At first, I still couldn't really adapt to the amount of work, the practice schedule with the team, and making new friends. After a while, I'd got more comfortable with this new lifestyle and get to travel to some golf tournaments with the team. Although I might not have any outstanding finish in any events on my first year, but I'm confident that all the hard work will pays off eventually!</p>
                </div>
            </div>
            <div className='box animation'>
                <h1>Golf Accomplishments</h1>
                <h3>AJGA 2017-2018 Transamerica Scholastic Junior All-America</h3>
                <h3>AJGA Champion - Billy Horschel Junior Invitational - 67-67-67 (-15)</h3>
                <h3>IMGA Champion - Rio Pinar CC - 70-71 (-3)</h3>
            </div>
            <style jsx>
                {
                    `
                    .container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        font-family: 'Montserrat', sans-serif;
                        color: #444649;
                        z-index: 1;
                    }

                    .container h1 {
                        font-weight: 400;
                        font-size: 25pt;
                    }

                    .container h3 {
                        font-weight: 400;
                        font-size: 16pt;
                    }

                    .container h4 {
                        font-weight: 200;
                        font-size: 14pt;
                        margin: 0;
                    }

                    .container p {
                        font-size: 14pt;
                        font-weight: 200;
                        line-height: 20pt;
                    }

                    .box {
                        width: 70%;
                        padding: 30px;
                        margin: 20px;
                        border: 1px solid #04c2c9;
                        border-radius: 20px;
                    }

                    .animation {
                        animation: slideInTop 0.75s ease-in;
                    }

                    @keyframes slideInTop {
                        from {opacity: 0; transform: translateY(-100%)}
                        to {opacity: 1; transform: translateY(0)}		
                    }

                    // Small devices
                    @media (max-width: 576px) {
                        .container h1 {
                            font-weight: 400;
                            font-size: 25px;
                        }

                        .container p {
                            font-size: 14px;
                            font-weight: 200;
                            line-height: 20pt;
                        }

                        .container h3 {
                            font-weight: 400;
                            font-size: 16px;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                    
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                    
                    }
                    `
                }
            </style>
        </div>
    );
};

export default golf;

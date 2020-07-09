import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';
import Cards from '../components/ExpPage/ExpCard';
import { useState } from 'react';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop/Backdrop';

const Experience = () => {

    const Dipsea = {
        name: 'Dipsea Capital, LLC',
        location: 'Greenbrae, CA',
        image: '/Dipsea.png',
        date: {
            from: 'March 2020',
            to: 'Current'
        }
    };

    const responsibility = {
        position: 'Trading Assistant',
        respon: [
            'Responsible for conducting research and analysis on the inefficiency of the stock market using Python and implement trading strategies on Tradestation using Tradestation Easylanguage',
            `Developed a trading model utilizing Google Cloud Platform's machine learning service, AutoML, to recognize the pattern of the market over a short timeframe with over 90 percent success rate for short trades.`,
            `Created 10+ new trading indicators offering the CIO more tools to make better decisions for various market situations`,
        ]
    };

    const SacHacks = {
        name: 'SacHacks',
        location: 'Sacramento, CA',
        image: '/Sachacks.png',
        date: {
            from: 'November 2019',
            to: 'Current'
        }
    };

    const SacRes = {
        position: {
            pos1: 'Web Developer',
            pos2: 'Lead Web Developer'
        },
        respon1: [
            "Utilized HTML, CSS, JavaScript, Bootstrap, and Twitter API for the SacHacks main website (sachacks.io) and SacHacks live website (sachacks.io/2020/ash.html) that was used by 100+ individuals during hackathon",
            'Optimized design of websites under instructions of SacHacks designers and Executive Director', ],
        respon2: [
            'Lead efforts on creating 4 new websites in preparation for future hackathons including the SacHacks legacy and mini-hackathon websites, and a brand-new SacHacks main and live websites',
            'Migrate the previous main and live websites tech stack from utilizing HTML/CSS, JS, Bootstrap to ReactJS',
            'Recruit students from different colleges to be part of the web development team as well as develop team culture with team bonding activities'
        ]
    };

    const [ sideDrawerOpen, setSideDrawerOpen ] = useState( false );

    let backdrop;
    if ( sideDrawerOpen ) {
        backdrop = <Backdrop click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />;
    }

    return (
        <div className="container">
            <Head>
                <title>Beam | Experience</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
            <SideDrawer show={sideDrawerOpen} />
            { backdrop }
            <main>
                <h1 className='header animation-head'>Work Experience</h1>
                <div className='header-line animation-line'></div>
                <Cards place={ Dipsea } job={ responsibility } />
                <Cards place={ SacHacks } job={ SacRes } />
            </main>
            <style jsx>
                {
                    `
                    main {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        font-family: 'Montserrat', sans-serif;
                    }

                    main h1 {
                        font-weight: 400;
                    }

                    .header {
                        padding: 0;
                        margin: 30px 0px 0px 0px;
                        font-weight: 400;
                        font-size: 25pt;
                        color: #444649;
                    }

                    .header-line {
                        width: 140px;
                        border-top: 3px solid #444649;
                        margin-top: 10px;
                    }

                    .animation-head {
                        animation: slideInLeft 0.75s ease-in;
                    }

                    .animation-line {
                        animation: slideInRight 0.75s ease-in;
                        animation-delay: 0.3s;
                    }

                    @keyframes slideInLeft {
                        from {opacity: 0; transform: translateX(-100%)}
                        to {opacity: 1; transform: translateX(0)}		
                    }

                    @keyframes slideInRight {
                        from {opacity: 0; transform: translateX(100%)}
                        to {opacity: 1; transform: translateX(0)}		
                    }

                    // Small devices
                    @media (max-width: 576px) {
                        main h1 {
                            font-size: 27px;
                        }

                        .header-line {
                            width: 100px;
                            border-top: 3px solid #444649;
                            margin-top: 10px;
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

export default Experience;
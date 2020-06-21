import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';
import Cards from '../components/ExpPage/ExpCard';

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
        respon: {
            res1: 'Responsible for conducting research and analysis on the inefficiency of the stock market using Python and implement trading strategies on Tradestation using Tradestation Easylanguage',
            res2: 'Created 10+ new trading indicators offering the CIO more tools to make better decisions for various market situations',
        }
    }

    const SacHacks = {
        name: 'SacHacks',
        location: 'Sacramento, CA',
        image: '/Sachacks.png',
        date: {
            from: 'November 2019',
            to: 'Current'
        }
    }

    const SacRes = {
        position: {
            pos1: 'Web Developer',
            pos2: 'Lead Web Developer'
        },
        respon: {
            res1: "Utilized HTML, CSS, JavaScript, Bootstrap, and Twitter API for the SacHacks main website (sachacks.io) and SacHacks live website (sachacks.io/2020/ash.html) that was used by 100+ individuals during hackathon",
            res2: 'Optimized design of websites under instructions of SacHacks designers and Executive Director',
            res3: 'Lead efforts on creating 4 new websites in preparation for future hackathons including the SacHacks legacy and mini-hackathon websites, and a brand-new SacHacks main and live websites',
            res4: 'Recruit students from different colleges to be part of the web development team as well as develop team culture with team bonding activities'
        }
    }

    return (
        <div className="container">
            <Head>
                <title>Beam | Experience</title>
            </Head>
            <Navbar />
            <main>
                <h1 className='header animation-head'>Work Experience</h1>
                <div className='header-line animation-line'></div>
                <Cards place={Dipsea} job={responsibility} />
                <Cards place={SacHacks} job={SacRes} /> 
            </main>
            <style jsx>
                {
                    `
                    main {
                        height: 100vh;
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
                    `
                }
            </style>
        </div>
    );
};

export default Experience;
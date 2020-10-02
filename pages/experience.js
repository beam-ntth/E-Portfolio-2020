import { useState, useEffect } from 'react';

import Navbar from '../components/Navigation/Navbar';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop/Backdrop';
import MetaTag from '../shared/MetaTag/MetaTag';

// Animations
import Aos from 'aos';

const Experience = () => {
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

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <div className="container">
            <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
            <MetaTag name="Experience" />
            <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
            <SideDrawer show={ sideDrawerOpen } />
            { backdrop }
            <main>
                <h1 className='header' data-aos='fade-right'>Work Experience</h1>
                <div className='header-line' data-aos='fade-up'></div>
                <div className='resume-box' data-aos='fade-up'>
                    <div className='company-logo'>
                        <img src='/Dipsea.png' alt='Dipsea Logo' />
                    </div>
                    <div className='headline'>
                        <h2 className='company'>Dipsea Capital, LLC</h2>
                        <div className='space' />
                        <h4 className='date'> March 2020 - August 2020</h4>
                    </div>
                    <div className='sub-headline'>
                        <h4 className='location'> Greenbrae, CA </h4>
                    </div>
                    <div className='responsibility'>
                        <h3 className='position'> Software Developer Intern </h3>
                        <ul>
                            <li>
                                Developed a model using Google Cloud Platform’s Machine Learning product, AutoML Vision, to predict the pattern
                                of the market with 86% precision. Created an automated trading strategy embracing this model that yields positive
                                returns for over 70% of the weeks traded
                            </li>
                            <li>
                                Integrated Mailchimp as a new backend to the website allowing the marketing team to gather information on user
                                behavior and accordingly optimize the experience for prospective clients
                            </li>
                            <li>
                                To ensure scalability and faster rendering, designed and developed a new website for the company
                                <a href='https://www.dipseacapital.com/' target='_blank' rel='noopener noreferrer'>www.dipseacapital.com</a>
                                by utilizing Next.js, React.js, Node.js, HTML, CSS. Migrated the host of the website from Wix.com to Vercel to
                                reduce cost
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='resume-box' data-aos='fade-up'>
                    <div className='company-logo'>
                        <img src='/Sachacks.png' alt='SacHacks Logo' />
                    </div>
                    <div className='headline'>
                        <h2 className='company'>SacHacks</h2>
                    </div>
                    <div className='sub-headline'>
                        <h4 className='location'> Sacramento, CA </h4>
                    </div>
                    <div className='responsibility'>
                        <div className='position-line'>
                            <h3 className='position'> Lead Web Developer </h3>
                            <div className='space' />
                            <h4 className='date'> March 2020 - Current</h4>
                        </div>
                        <ul>
                            <li>
                                Led efforts to migrate SacHacks’s tech stacks from Javascript and Bootstrap to React.js on Node.js server to 
                                boost productivity and facilitate future maintenance of the application
                            </li>
                            <li>
                                Implemented a new subscribe section on the website 
                                <a href='https://sachacks.io/' target='_blank' rel='noopener noreferrer'>sachacks.io</a> 
                                projected to increase the amount of subscribers by 30% leading up to the event
                            </li>
                            <li>
                                Developed strategies to test new features for the website by employing A/B testing methodology to provide SacHacks 
                                with more accurate feedback from sponsors and participants
                            </li>
                        </ul>
                    </div>
                    <div className='responsibility'>
                        <div className='position-line'>
                            <h3 className='position'> Web Developer </h3>
                            <div className='space' />
                            <h4 className='date'> November 2019 - March 2020 </h4>
                        </div>
                        <ul>
                            <li>
                                Utilized HTML, CSS, JavaScript, Bootstrap, and Twitter API for the SacHacks main website 
                                <a href='https://sachacks.io/' target='_blank' rel='noopener noreferrer'>sachacks.io</a> 
                                and SacHacks live website that was used by 100+ individuals during the hackathon
                            </li>
                            <li>
                                Collaborated closely with different teams to optimize the design and features of the websites
                            </li>
                        </ul>
                    </div>
                </div>
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

                    .resume-box {
                        width: 80%;
                        border: solid 1px black;
                        padding: 3%;
                        border-radius: 20px;
                        margin: 3% 0;
                    }

                    .headline, .position-line {
                        width: 100%;
                        display: flex;
                    }

                    img {
                        height: auto;
                        width: 13%;
                        margin-bottom: 2%;
                    }

                    .space {
                        flex: 1;
                    }

                    .company {
                        font-size: 30px;
                        font-weight: 300;
                    }
                    
                    .date, .location, .position, li {
                        font-weight: 300;
                    }

                    ul {
                        width: 90%;
                    }

                    li {
                        margin: 3% 0;
                        text-align: justify;
                    }
                    
                    a {
                        margin: 0 0.7%;
                        color: blue;
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

                        .resume-box {
                            width: 90%;
                            margin: 10% 0;
                        }

                        .company-logo {
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        img {
                            height: auto;
                            width: 50%;
                            margin: 10% 0;
                        }

                        .headline, .position-line {
                            flex-direction: column;
                        }

                        .company {
                            margin: 0;
                        }

                        .position {
                            margin: 0;
                        }

                        ul {
                            width: 80%;
                        }

                        li {
                            text-align: left;
                        }

                        a {
                            padding: 0 3%;
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
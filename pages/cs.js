import { useState, useEffect } from 'react';

import Navbar from '../components/Navigation/Navbar';
import HackCard from '../components/CSPage/HackCard';
import ProjCard from '../components/CSPage/ProjCard';
import LangCard from '../components/CSPage/LangCard';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop/Backdrop';
import MetaTag from '../shared/MetaTag/MetaTag';

// Animations
import Aos from 'aos';

const Cs = () => {
    const eTree = {
        name: 'E-Tree',
        place: 'EarthxHack 2020',
        image: '/e-tree.png',
        link: 'https://devpost.com/software/e-tree',
        tech: 'ReactJS / Google Firebase'
    };

    const hackDavis = {
        name: 'UC Davis Energy Analyzer',
        place: 'HackDavis 2020',
        image: '/ucdea.jpg',
        link: 'https://devpost.com/software/uc_davis_energy_analyzer',
        tech: 'HTML/CSS / Python (Django)'
    };

    const proj1 = {
        name: 'Stock Trading Simulator',
        link: 'https://github.com/beam-ntth/Stocks-Trading-Simulator',
        tech: 'HTML/CSS / Python (Django) / SQLite3'
    };

    const proj2 = {
        name: 'Trading Economics Analyzer',
        link: 'https://github.com/beam-ntth/Trading-Economics-Analyzer',
        tech: 'HTML/CSS / Python (Django) / Trading Economics API'
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
            <MetaTag name='CS' />
            <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
            <SideDrawer show={ sideDrawerOpen } />
            { backdrop }
            <main>
                <h1 className='header' data-aos='fade-right'>Hackathons</h1>
                <div className='header-line' data-aos='fade-up'></div>
                <div className='hackathon'>
                    <HackCard aos='fade-up' hack={ eTree } />
                    <HackCard aos='fade-up' hack={ hackDavis } />
                </div>
                <h1 className='header' data-aos='fade-right'>Personal Projects</h1>
                <div className='header-line' data-aos='fade-up'></div>
                <div className='personal-proj'>
                    <ProjCard aos='fade-up' proj={ proj1 } />
                    <ProjCard aos='fade-up' proj={ proj2 } />
                </div>
                <h1 className='header' data-aos='fade-right'>Other works</h1>
                <div className='header-line' data-aos='fade-up'></div>
                <div className='others-first-row'>
                    <LangCard aos='fade-up' lang={ { name: 'Python', link: '/coding/python' } } />
                    <LangCard aos='fade-up' lang={ { name: 'Javascript', link: '/coding/js' } } />
                    <LangCard aos='fade-up' lang={ { name: 'C++', link: '/coding/cpp' } } />
                </div>
                <div className='others-sec-row'>
                    <LangCard aos='fade-up' lang={ { name: 'Java', link: '/coding/java' } } />
                    <LangCard aos='fade-up' lang={ { name: 'C', link: '/coding/c' } } />
                </div>
            </main>
            <style jsx>
                {
                    `
                    .container {
                        width: 100vw;
                    }
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

                    .hackathon, .personal-proj {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                    }

                    .others-first-row, .others-sec-row {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
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
                        .header {
                            font-size: 25px;
                        }

                        .header-line {
                            width: 100px;
                        }

                        .hackathon, .personal-proj {
                            display: flex;
                            width: 100%;
                            height: auto;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }

                        .others-first-row, .others-sec-row {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                        .hackathon, .personal-proj {
                            display: flex;
                            width: 100%;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }

                        .others-first-row, .others-sec-row {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                        .hackathon, .personal-proj {
                            display: flex;
                            width: 100%;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }

                        .others-first-row, .others-sec-row {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    `
                }
            </style>
        </div>
    );
};

export default Cs;
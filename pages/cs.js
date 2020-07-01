import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';
import HackCard from '../components/CSPage/HackCard';
import ProjCard from '../components/CSPage/ProjCard';
import LangCard from '../components/CSPage/LangCard';

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
    return (
        <div className="container">
            <Head>
                <title>Beam | CS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <h1 className='header animation-head'>Hackathons</h1>
                <div className='header-line animation-line'></div>
                <div className='hackathon'>
                    <HackCard className='animation-ltor' hack={ eTree } />
                    <HackCard className='animation-rtol' hack={ hackDavis } />
                </div>
                <h1 className='header animation-head'>Personal Projects</h1>
                <div className='header-line animation-line'></div>
                <div className='personal-proj'>
                    <ProjCard className='animation-ltor' proj={ proj1 } />
                    <ProjCard className='animation-rtol' proj={ proj2 } />
                </div>
                <h1 className='header animation-head'>Other works</h1>
                <div className='header-line animation-line'></div>
                <div className='others-first-row'>
                    <LangCard className='animation-ltor' lang={ { name: 'Python', link: '/coding/python' } } />
                    <LangCard className='animation-fi' lang={ { name: 'Javascript', link: '/coding/js' } } />
                    <LangCard className='animation-rtol' lang={ { name: 'C++', link: '/coding/cpp' } } />
                </div>
                <div className='others-sec-row'>
                    <LangCard className='animation-ltor' lang={ { name: 'Java', link: '/coding/java' } } />
                    <LangCard className='animation-rtol' lang={ { name: 'C', link: '/coding/c' } } />
                </div>
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

                    .hackathon, .personal-proj {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .others-first-row, .others-sec-row {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
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

export default Cs;
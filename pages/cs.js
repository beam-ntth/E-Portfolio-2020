import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';
import HackCard from '../components/CSPage/HackCard';

const Cs = () => {
    const eTree = {
        place: 'EarthxHack 2020',
        image: '/e-tree.png',
        link: '',
        tech: 'ReactJS / Google Firebase'
    };

    const hackDavis = {
        place: 'HackDavis 2020',
        image: '/e-tree.png',
        link: '',
        tech: 'HTML/CSS / Python'
    };
    return (
        <div className="container">
            <Head>
                <title>Beam | CS</title>
            </Head>
            <Navbar />
            <main>
                <h1 className='header animation-head'>Hackathons</h1>
                <div className='header-line animation-line'></div>
                <div className='hackathon'>
                    <HackCard hack={ eTree } />
                    <HackCard hack={ hackDavis } />
                </div>
                <h1 className='header animation-head'>Personal Projects</h1>
                <div className='header-line animation-line'></div>
                <h1 className='header animation-head'>Other works</h1>
                <div className='header-line animation-line'></div>
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

                    .hackathon {
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
                    `
                }
            </style>
        </div>
    );
};

export default Cs;
import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';
import Cards from '../components/ExpPage/ExpCard';

const Experience = () => {
    return (
        <div className="container">
            <Head>
                <title>Beam | Experience</title>
            </Head>
            <Navbar />
            <main>
                <Cards />
                <Cards />
                <Cards />
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

                    }
                    `
                }
            </style>
        </div>
    );
};

export default Experience;
import Head from 'next/head';

import Intro from '../components/MainPage/Intro';
import Navbar from '../components/Navigation/Navbar';

const Bio = () => {
    return (
        <div className="container">
            <Head>
                <title>Beam | Biography</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <Intro />
            </main>
            <style jsx>
                {
                    `
                    main {
                        margin-top: 40px;
                    }

                    @media (max-width: 576px) {
                        main {
                            margin-top: 20px;
                        }
                    }  
                    `
                }
            </style>
        </div>

    );
};

export default Bio;
import Head from 'next/head';

import Intro from '../components/MainPage/Intro';
import CurrentProject from '../components/MainPage/CurrentProjects';

const Bio = () => {
    return (
        <div className="container">
            <Head>
                <title>Beam | Experience</title>
            </Head>
            <main>
                <Intro />
                <CurrentProject />
            </main>
        </div>
    );
};

export default Bio;
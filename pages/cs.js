import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';

const Cs = () => {
    return (
        <div className="container">
            <Head>
                <title>Beam | CS</title>
            </Head>
            <Navbar />
            <div>CS Page</div>
        </div>
    );
};

export default Cs;
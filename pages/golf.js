import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';

const golf = () => {
    return (
        <div className='container'>
            <Head>
                <title>Beam | Golf</title>
            </Head>
            <Navbar />
        </div>
    )
}

export default golf

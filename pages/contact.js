import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';

const Contact = () => {
    return (
        <div className="container">
            <Head>
                <title>Beam | Contact</title>
            </Head>
            <Navbar />
            <div className='contact'>
                <h1>Contact Information</h1>
                <p>Email: <a>beam4318.t@gmail.com</a>, <a>nteacharuangchit@ucdavis.edu</a></p>
                <p>Mobile: +1(941) 807 2075</p>
                <div>Linkedin Icon</div>
            </div>
        </div>
    );
};

export default Contact;
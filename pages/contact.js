import Head from 'next/head';

import Navbar from '../components/Navigation/Navbar';
import { FaLinkedinIn, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { useEffect } from 'react';

const Contact = () => {
    const gitOpen = () => {
        window.open( 'https://github.com/beam-ntth' );
    };

    const linkedInOpen = () => {
        window.open( 'https://www.linkedin.com/in/natheethorn-teacharuangchit/' );
    };

    const stackOpen = () => {
        window.open( 'https://stackoverflow.com/users/story/13485469' );
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <Head>
                    <title>Beam | Contact</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className='contact'>
                    <h1 className='header animation-head'>Contact</h1>
                    <div className='header-line animation-line'></div>
                    <div className='email animation'>
                        <p>Email: <a>beam4318.t@gmail.com</a>, <a>nteacharuangchit@ucdavis.edu</a></p>
                    </div>
                    <div className='phone animation'>
                        <p>Mobile: +1(941) 807 2075</p>
                    </div>
                    <div className='icon'>
                        <div className='linked animation-line' onClick={ linkedInOpen }>
                            <FaLinkedinIn fill='white' size='22px' />
                        </div>
                        <div className='github animation-line' onClick={ gitOpen }>
                            <FaGithub fill='white' size='22px' />
                        </div>
                        <div className='overflow animation-line' onClick={ stackOpen }>
                            <FaStackOverflow fill='white' size='22px' />
                        </div>
                    </div>
                </div>
                <style jsx>
                    {
                        `
                    .container {
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        font-family: 'Montserrat', sans-serif;
                    }

                    .contact {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                    }

                    .header {
                        padding: 0;
                        margin: 30px 0px 0px 0px;
                        font-weight: 400;
                        font-size: 25pt;
                        color: #444649;
                    }

                    .header-line {
                        width: 60px;
                        border-top: 3px solid #444649;
                        margin-top: 10px;
                    }

                    .animation-head {
                        animation: slideInLeft 0.75s ease-in;
                    }

                    .animation-line {
                        animation: slideInRight 0.75s ease-in;
                    }

                    .animation {
                        animation: slideInLeftHalf 0.75s ease-in;
                    }

                    .email, .phone {
                        width: 90%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start;
                        margin: 20px;
                    }

                    .email p, a {
                        font-size: 17pt;
                        font-weight: 200;
                        margin: 20px 0px 0px 0px;
                    }

                    .phone p {
                        font-size: 17pt;
                        font-weight: 200;
                        margin: 0;
                    }

                    .icon {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        width: 90%;
                        margin: 20px;
                    }

                    .linked {
                        height: 50px;
                        width: 50px;
                        border-radius: 50px;
                        background-color: #2867B2;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        margin: 0px 20px 0px 0px;
                    }

                    .github {
                        height: 50px;
                        width: 50px;
                        border-radius: 50px;
                        background-color: #24292e;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        margin: 0px 20px;
                    }

                    .overflow {
                        height: 50px;
                        width: 50px;
                        border-radius: 50px;
                        background-color: #ef8236;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        margin: 0px 20px;
                    }

                    @keyframes slideInLeft {
                        from {opacity: 0; transform: translateX(-100%)}
                        to {opacity: 1; transform: translateX(0)}		
                    }

                    @keyframes slideInLeftHalf {
                        from {opacity: 0; transform: translateX(-10%)}
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
        </React.Fragment>
    );
};

export default Contact;
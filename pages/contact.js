import { useState, useEffect } from 'react';

import Navbar from '../components/Navigation/Navbar';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop/Backdrop';
import MetaTag from '../shared/MetaTag/MetaTag';
import { FaLinkedinIn, FaGithub, FaStackOverflow } from 'react-icons/fa';

// Animations
import Aos from 'aos';

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

    const [ sideDrawerOpen, setSideDrawerOpen ] = useState( false );

    let backdrop;
    if ( sideDrawerOpen ) {
        backdrop = <Backdrop click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />;
    }

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <React.Fragment>
            <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
            <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
            <SideDrawer show={ sideDrawerOpen } />
            { backdrop }
            <div className="container">
                <MetaTag name='Contact' />

                <div className='contact'>
                    <h1 className='header' data-aos='fade-right'>Contact</h1>
                    <div className='header-line' data-aos='fade-up'></div>
                    <div className='email' data-aos='fade-right'>
                        <p>Email: <a>beam4318.t@gmail.com</a>, <a>nteacharuangchit@ucdavis.edu</a></p>
                    </div>
                    <div className='phone' data-aos='fade-right'>
                        <p>Mobile: +1(941) 807 2075</p>
                    </div>
                    <div className='icon'>
                        <div className='linked' data-aos='fade-right' onClick={ linkedInOpen }>
                            <FaLinkedinIn fill='white' size='22px' />
                        </div>
                        <div className='github' data-aos='fade-right' onClick={ gitOpen }>
                            <FaGithub fill='white' size='22px' />
                        </div>
                        <div className='overflow' data-aos='fade-right' onClick={ stackOpen }>
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

                    // Small devices
                    @media (max-width: 576px) {
                        .header {
                            padding: 0;
                            margin: 30px 0px 0px 0px;
                            font-weight: 400;
                            font-size: 25px;
                            color: #444649;
                        }
    
                        .header-line {
                            width: 40px;
                            border-top: 3px solid #444649;
                            margin-top: 10px;
                        }

                        .email p {
                            font-size: 17px;
                            font-weight: 200;
                            margin: 20px 0px 0px 0px;
                        }

                        .email a {
                            margin-left: 10px;
                            font-size: 16px;
                        }

                        .phone p {
                            font-size: 17px;
                            font-weight: 200;
                            margin: 0;
                        }

                        .linked, .github, .overflow {
                            height: 40px;
                            width: 40px;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                    
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                    
                    }
                    `
                    }
                </style>
            </div>
        </React.Fragment>
    );
};

export default Contact;
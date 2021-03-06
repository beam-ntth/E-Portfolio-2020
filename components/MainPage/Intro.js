import { useEffect } from 'react';

import CurrentProject from './CurrentProjects';

// Animations
import Aos from 'aos';

const Intro = () => {

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <React.Fragment>
            <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
            <div className="about-me">
                <h1 className='header' data-aos='fade-down'>About me</h1>
                <div className='header-line' data-aos='fade-down'></div>
                <div className='description'>
                    <div className='image' data-aos='fade-right'>
                        <img src='/beam.JPG' alt='profile picture' />
                    </div>
                    <div className='bio' data-aos='fade-left'>
                        <p>My name is Natheethorn Teacharuangchit. I was born in Bangkok, Thailand. I'm currently a student-athlete on the Men's Golf Team at University of California, Davis and pursuing a Bachelor's Degree of Computer Science and Engineering. I mostly spend my time coding(obviously), practicing golf, and hanging out with my boys. If you wonder why I started programming or playing golf, go visit my CS and GOLF page!</p>
                        <h4>Other Interests</h4>
                        <ul>
                            <li>Thai tea boba</li>
                            <li>Rick and Morty</li>
                        </ul>
                    </div>
                </div>
                <CurrentProject />
            </div>
            <style jsx>
                {
                    `
                    .about-me {
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #444649;
                        font-family: 'Montserrat', sans-serif;
                        overflow-y: hidden;
                    }

                    .about-me .header {
                        padding: 0;
                        margin: 0;
                        font-weight: 400;
                        font-size: 25pt;
                    }

                    .about-me .header-line {
                        width: 80px;
                        border-top: 3px solid #444649;
                        margin-top: 10px;
                        
                    }

                    .description {
                        display: flex;
                        flex-direction: row;
                        margin: 40px 50px;
                        height: 35%;
                        width: 80%;
                    }

                    .description .image {
                        width: 40%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                    }

                    img {
                        border-radius: 25px;
                        box-shadow: 7px 7px #444649;
                        width: 235px;
                        height: auto;
                    }

                    .description .bio {
                        width: 60%;
                    }

                    .bio {
                        font-weight: 200;
                    }

                    .bio h4 {
                        font-weight: 400;
                        font-size: 15pt;
                        margin: 20px 0px 10px 0px;
                    }

                    .bio ul, p {
                        margin: 0;
                        font-size: 13.5pt;
                        line-height: 20pt;
                    }

                    // Small devices
                    @media (max-width: 576px) {
                        .about-me {
                            height: 100%;
                            width: 100%;
                        }

                        .about-me .header {
                            font-size: 16pt;
                        }

                        .about-me .header-line {
                            width: 70px;
                            border-top: 2px solid #444649;
                            margin-top: 5px;
                        }

                        .description {
                            flex-direction: column;
                            align-items: center;
                            justify-content: flex-start;
                            margin: 20px 0px 0px 0px;
                            height: 450px;
                            width: 100%;
                        }

                        .description .image {
                            height: 45%;
                            width: 40%;
                        }

                        img {
                            border-radius: 25px;
                            box-shadow: 7px 7px #444649;
                            width: auto;
                            height: 100%;
                        }

                        .description .bio {
                            display: flex;
                            flex-direction: column;
                            height: 55%;
                            width: 90%;
                            align-items: flex-start;
                            justify-content: center;
                        }

                        .bio ul, p {
                            font-size: 9pt;
                            line-height: 14pt;
                        }

                        .bio h4 {
                            margin: 10px 0px 5px 0px;
                            font-size: 12pt;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {

                        .about-me .header {
                            font-size: 18pt;
                        }

                        .about-me .header-line {
                            width: 70px;
                            border-top: 2px solid #444649;
                            margin-top: 5px;
                        }

                        .description {
                            margin: 20px 0px;
                            height: 25%;
                            
                        }

                        .description .image {
                            width: 40%;
                        }

                        .description .bio {
                            width: 60%;
                        }

                        .bio ul, p {
                            font-size: 9pt;
                            line-height: 14pt;
                        }

                        .bio h4 {
                            margin: 10px 0px 5px 0px;
                            font-size: 13pt;
                        }
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                        .about-me .header {
                            font-size: 20pt;
                        }

                        .about-me .header-line {
                            width: 70px;
                            border-top: 2px solid #444649;
                            margin-top: 5px;
                        }

                        .description {
                            margin: 20px 25px;
                            height: 25%;
                            width: 95%;
                        }

                        .description .image {
                            width: 40%;
                        }

                        .description .bio {
                            width: 60%;
                        }

                        .bio ul, p {
                            font-size: 10pt;
                            line-height: 14pt;
                        }

                        .bio h4 {
                            margin: 10px 0px 5px 0px;
                            font-size: 13pt;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default Intro;

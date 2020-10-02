import { useEffect } from 'react';

// Animations
import Aos from 'aos';

const CurrentProjects = () => {

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <React.Fragment>
            <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
            <div className='current'>
                <h1 className='header' data-aos='fade-down'>Current Project</h1>
                <div className='header-line' data-aos='fade-down'></div>
                <div className='content'>
                    <h2 data-aos='fade-down'>Web Development: Updating this website on a consistent basis</h2>
                    <div className='tech-stack'>
                        <div className='tech-from'>
                            <p data-aos='fade-right'>Converted from the old Tech Stack</p>
                            <ul className='list'>
                                <li data-aos='fade-up' >HTML/CSS</li>
                                <li data-aos='fade-up' >Javascript</li>
                                <li data-aos='fade-up' >Bootstrap</li>
                            </ul>
                        </div>
                        <div className='tech-to'>
                            <p data-aos='fade-left'>To the new Tech Stack</p>
                            <ul className='list'>
                                <li data-aos='fade-up' >Next.js</li>
                                <li data-aos='fade-up' >React.js</li>
                                <li data-aos='fade-up' >Node.js</li>
                                <li data-aos='fade-up' >HTML/CSS</li>
                                <li data-aos='fade-up' >Javascript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .current {
                        width: 100%;
                        height: 90%;
                        color: #444649;
                        font-family: 'Montserrat', sans-serif;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        box-sizing: border-box;
                    }

                    .current .header {
                        padding: 0;
                        margin: 0;
                        font-weight: 400;
                        font-size: 25pt;
                    }

                    .current .header-line {
                        width: 140px;
                        border-top: 3px solid #444649;
                        margin-top: 10px;
                    }

                    .content {
                        width: 80%;
                        height: 100%;
                        display: flex; 
                        flex-direction: column;
                        align-items: center;
                        box-sizing: border-box;
                    }

                    .content h2 {
                        font-weight: 400;
                        font-size: 20pt;
                        margin: 20px 0px 10px 0px;
                    }

                    .content .tech-stack {
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        padding: 0 0 10% 0;
                    }

                    .tech-stack p {
                        font-size: 15pt;
                        font-weight: 200;
                        margin: 10px 0px;
                    }

                    .tech-from, .tech-to {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 50%;
                    }

                    .list {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                    }

                    .list li {
                        padding: 10px 15px;
                        color: #fff;
                        background-color: #04c2c9;
                        margin: 10px;
                        text-align: center;
                    }

                    // Small devices
                    @media (max-width: 576px) {
                        .current {
                            margin-top: 0px;
                        }

                        .current .header {
                            font-size: 16pt;
                        }
    
                        .current .header-line {
                            width: 120px;
                            border-top: 2px solid #444649;
                            margin-top: 5px;
                        }

                        .content {
                            width: 100%;
                        }

                        .content h2 {
                            font-size: 9pt;
                            margin: 10px 0px 5px 0px;
                        }

                        .tech-stack p {
                            font-size: 8pt;
                        }

                        .list li {
                            font-size: 8pt;
                            padding: 8px 13px;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                        .current {
                            margin-top: 30px;
                        }

                        .current .header {
                            font-size: 18pt;
                        }
    
                        .current .header-line {
                            width: 120px;
                            border-top: 2px solid #444649;
                            margin-top: 5px;
                        }

                        .content h2 {
                            font-size: 11pt;
                        }

                        .tech-stack p {
                            font-size: 10pt;
                        }

                        .list li {
                            font-size: 9pt;
                        }
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                        .current {
                            margin-top: 20px;
                        }

                        .current .header {
                            font-size: 20pt;
                        }
    
                        .current .header-line {
                            width: 120px;
                            border-top: 2px solid #444649;
                            margin-top: 5px;
                        }

                        .content h2 {
                            font-size: 15pt;
                        }

                        .tech-stack p {
                            font-size: 12pt;
                        }

                        .list li {
                            font-size: 10pt;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default CurrentProjects;

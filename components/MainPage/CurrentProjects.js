const CurrentProjects = () => {
    return (
        <React.Fragment>
            <div className='current'>
                <h1 className='header animation-head'>Current Project</h1>
                <div className='header-line animation-line'></div>
                <div className='content'>
                    <h2 className='animation'>Web Development: Updating this website on a consistent basis</h2>
                    <div className='tech-stack'>
                        <div className='tech-from animation-tech-left'>
                            <p>Converted from the old Tech Stack</p>
                            <ul className='list'>
                                <li>HTML/CSS</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className='tech-to animation-tech-right'>
                            <p>To the new Tech Stack</p>
                            <ul className='list'>
                                <li>Next.js</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>HTML/CSS</li>
                                <li>Javascript</li>
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

                    .animation-head, .animation-tech-left {
                        animation: slideInLeft 0.75s ease-in;
                    }

                    .animation-line {
                        animation: slideInRight 0.75s ease-in;
                        animation-delay: 0.3s;
                    }

                    .animation {
                        animation: slideInLeft 1s ease-in;
                    }

                    .animation-tech-right {
                        animation: slideInRight 0.75s ease-in;
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

                    @keyframes slideInLeft {
                        from {opacity: 0; transform: translateX(-100%)}
                        to {opacity: 1; transform: translateX(0)}		
                    }

                    @keyframes slideInRight {
                        from {opacity: 0; transform: translateX(100%)}
                        to {opacity: 1; transform: translateX(0)}		
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
